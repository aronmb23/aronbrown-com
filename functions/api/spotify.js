export async function onRequest(context) {
    const {
        SPOTIFY_CLIENT_ID,
        SPOTIFY_CLIENT_SECRET,
        SPOTIFY_REFRESH_TOKEN
    } = context.env;

    if (!SPOTIFY_REFRESH_TOKEN) {
        return new Response(JSON.stringify({ error: 'Spotify not configured' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const basic = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);
    const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

    try {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token: SPOTIFY_REFRESH_TOKEN
            })
        });

        const data = await response.json();
        const { access_token } = data;

        if (!access_token) {
            return new Response(JSON.stringify({ error: 'Failed to get access token' }), { status: 500 });
        }

        const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
            return new Response(JSON.stringify({ isPlaying: false }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const song = await nowPlayingResponse.json();

        if (song.item === null) {
            return new Response(JSON.stringify({ isPlaying: false }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const isPlaying = song.is_playing;
        const title = song.item.name;
        const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
        const album = song.item.album.name;
        const albumImageUrl = song.item.album.images[0].url;
        const songUrl = song.item.external_urls.spotify;

        return new Response(JSON.stringify({
            album,
            albumImageUrl,
            artist,
            isPlaying,
            songUrl,
            title
        }), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
            }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching song' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
