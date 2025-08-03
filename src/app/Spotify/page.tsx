'use client';
import SpotifyWidget from './SpotifyWidget';
import PlaylistStats from './PlaylistStats';

export default function SpotifyPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-white text-black">
      <h1 className="text-4xl font-bold mb-8 text-center">The Top 100 Songs</h1>

      <div className="w-full max-w-3xl mb-12">
        <SpotifyWidget />
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center">Want to know some stats about this playlist?</h2>

      <div className="w-full max-w-4xl">
        <PlaylistStats />
      </div>
    </main>
  );
}
