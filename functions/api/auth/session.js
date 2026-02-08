export async function onRequestGet(context) {
  const { SESSION_SECRET } = context.env;

  if (!SESSION_SECRET) {
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const cookie = context.request.headers.get('Cookie') || '';
  const sessionToken = parseCookie(cookie, 'session');

  if (!sessionToken) {
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const decoded = JSON.parse(atob(sessionToken));
    const { payload, signature } = decoded;

    // Verify HMAC signature
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(SESSION_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const signatureBytes = new Uint8Array(
      signature.match(/.{2}/g).map((byte) => parseInt(byte, 16))
    );

    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      signatureBytes,
      encoder.encode(payload)
    );

    if (!valid) {
      return new Response(JSON.stringify({ authenticated: false }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check expiry
    const parts = payload.split(':');
    const expires = parseInt(parts[2], 10);

    if (Date.now() > expires) {
      return new Response(JSON.stringify({ authenticated: false }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': 'session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0',
        },
      });
    }

    return new Response(JSON.stringify({ authenticated: true, user: parts[0] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ authenticated: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

function parseCookie(cookieHeader, name) {
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? match[1] : null;
}
