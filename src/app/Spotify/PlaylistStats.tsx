'use client';

import { useEffect, useState } from 'react';
import { TrackInfo } from './types';

export default function PlaylistStats() {
  const [tracks, setTracks] = useState<TrackInfo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTracks() {
      try {
        const res = await fetch('/api/spotify/tracks');
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Unknown error');

        setTracks(data);
      } catch (err: any) {
        setError(err.message || 'Fetch error');
      }
    }

    loadTracks();
  }, []);

  if (error) return <div className="text-red-600">Error: {error}</div>;
  if (tracks.length === 0) return <div>Loading playlist stats...</div>;

  const mostPopular = tracks.reduce((top, curr) =>
    curr.popularity > top.popularity ? curr : top
  );

  const avgDurationMs = Math.floor(
    tracks.reduce((sum, t) => sum + t.durationMs, 0) / tracks.length
  );

  const minutes = Math.floor(avgDurationMs / 60000);
  const seconds = Math.floor((avgDurationMs % 60000) / 1000);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-black rounded-lg p-4">
        <h3 className="font-bold mb-2">Average Song Length</h3>
        <p className="text-lg italic">
          {minutes}m {seconds}s
        </p>
      </div>

      <div className="md:col-span-2 border border-black rounded-lg p-4">
        <h3 className="font-bold mb-2">Most Popular Track</h3>
        <p className="text-lg italic">
          "{mostPopular.name}" by {mostPopular.artist} (Popularity: {mostPopular.popularity})
        </p>
      </div>
    </div>
  );
}