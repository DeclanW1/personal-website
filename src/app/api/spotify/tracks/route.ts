import { NextResponse } from 'next/server';

type PlaylistItem = {
  track: {
    name: string;
    artists: { name: string }[];
    duration_ms: number;
    popularity: number;
  };
};

export async function GET() {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID!;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
    const playlistId = '5boLwfhhUnqka202FQLNGs';
    console.log('Fetching Spotify access token...');

    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const tokenData = await tokenRes.json();
    console.log('Token response:', tokenData);

    if (!tokenRes.ok) {
      console.error('Failed to get access token:', tokenData);
      return NextResponse.json({ error: 'Failed to get access token' }, { status: 500 });
    }

    console.log('Fetching playlist tracks...');

    const playlistRes = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    const playlistData = await playlistRes.json();
    console.log('Playlist data fetched');

    if (!playlistRes.ok) {
      console.error('Failed to fetch playlist:', playlistData);
      return NextResponse.json({ error: 'Failed to fetch playlist' }, { status: 500 });
    }

    const simplifiedTracks = (playlistData.items as PlaylistItem[])
      .filter((item) => item.track)
      .map((item) => ({
        name: item.track.name,
        artist: item.track.artists[0]?.name || 'Unknown',
        durationMs: item.track.duration_ms,
        popularity: item.track.popularity,
      }));

    console.log(`Returning ${simplifiedTracks.length} tracks`);

    return NextResponse.json(simplifiedTracks);
  } catch (err: unknown) {
    console.error('Unexpected error:', err instanceof Error ? err.message : err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}