export async function onRequestPost(context) {
  const { AUTH_USERNAME, AUTH_PASSWORD_HASH, SESSION_SECRET } = context.env;

  if (!AUTH_USERNAME || !AUTH_PASSWORD_HASH || !SESSION_SECRET) {
    return new Response(JSON.stringify({ error: 'Auth not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { username, password } = body;

  if (!username || !password) {
    return new Response(JSON.stringify({ error: 'Missing credentials' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Hash the provided password with SHA-256 to compare against stored hash
  const encoder = new TextEncoder();
  const passwordBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(password));
  const passwordHash = Array.from(new Uint8Array(passwordBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  // Timing-safe comparison for both username and password hash
  const usernameMatch = timingSafeEqual(username, AUTH_USERNAME);
  const passwordMatch = timingSafeEqual(passwordHash, AUTH_PASSWORD_HASH);

  if (!usernameMatch || !passwordMatch) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Create a signed session token (HMAC-SHA256)
  const issued = Date.now();
  const expires = issued + 24 * 60 * 60 * 1000; // 24 hours
  const payload = `${username}:${issued}:${expires}`;

  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(SESSION_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signatureBuffer = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  const signature = Array.from(new Uint8Array(signatureBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  const token = btoa(JSON.stringify({ payload, signature }));

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
    },
  });
}

// Constant-time string comparison to prevent timing attacks
function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) {
    // Compare against self to maintain constant time even on length mismatch
    b = a;
  }
  let result = a.length === b.length ? 0 : 1;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}
