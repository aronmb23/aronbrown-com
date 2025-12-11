import http from 'http';
import { open } from 'fs/promises';
import { exec } from 'child_process';

const CLIENT_ID = '552d2c2ec95842c7a80f5adf17af9b57';
const CLIENT_SECRET = '4ded07070e2f48e0a13e18ade01105f3';
const REDIRECT_URI = 'http://127.0.0.1:8888/callback';
const SCOPES = 'user-read-currently-playing user-read-playback-state';

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === '/callback') {
        const code = url.searchParams.get('code');
        if (code) {
            try {
                const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
                    },
                    body: new URLSearchParams({
                        grant_type: 'authorization_code',
                        code: code,
                        redirect_uri: REDIRECT_URI
                    })
                });

                const data = await tokenResponse.json();

                if (data.refresh_token) {
                    res.end('Success! You can close this window. Check your terminal for the Refresh Token.');
                    console.log('\n=== YOUR REFRESH TOKEN ===');
                    console.log(data.refresh_token);
                    console.log('==========================\n');
                    console.log('Copy this token to your .env file as SPOTIFY_REFRESH_TOKEN');
                    process.exit(0);
                } else {
                    res.end('Error: No refresh token received. Check console.');
                    console.error('Error data:', data);
                }
            } catch (error) {
                res.end('Error fetching token.');
                console.error(error);
            }
        }
    }
});

server.listen(8888, () => {
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    console.log('Please open this URL in your browser to authorize:');
    console.log(authUrl);

    // Try to open automatically (windows)
    exec(`start "${authUrl}"`);
});
