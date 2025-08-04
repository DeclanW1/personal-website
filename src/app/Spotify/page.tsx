'use client';
import SpotifyWidget from './SpotifyWidget';
import PlaylistStats from './PlaylistStats';

export default function SpotifyPage() {
  return (
    <main className="bg-[#f5f0eb] text-[#3b2f2f] min-h-screen px-4 pt-12 pb-16 flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">The Top 100 Songs</h1>
        <p className="text-lg text-[#5b4a4a]">
          A playlist of what I consider to be the greatest songs, ever.
        </p>
      </div>

      <div className="w-full max-w-3xl mb-12">
        <SpotifyWidget />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2">Want to know some stats about this playlist?</h2>
        <p className="text-md text-[#5b4a4a]">
          Here is a breakdown of the average song length and most popular song in this playlist.
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <PlaylistStats />
      </div>
    </main>
  );
}

