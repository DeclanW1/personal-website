export async function getAccessToken(): Promise<string> {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(`Spotify token error: ${data.error_description || data.error}`);
    }
  
    return data.access_token;
  }
  
  export async function fetchPlaylistTracks(playlistId: string) {
    const token = await getAccessToken();
  
    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(`Spotify playlist fetch error: ${data.error?.message || 'Unknown error'}`);
    }
  
    return data.items;
  }
  