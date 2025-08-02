'use client';
import { useState } from 'react';

export default function SpotifyBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-xl">
      <button
        onClick={() => setOpen(!open)}
        className="bg-white text-black text-lg font-medium py-4 px-6 rounded-lg border border-black hover:shadow-md transition-all w-full text-left">
        What I'd consider to be the top 100 songs ever (work in progress)
      </button>

      {open && (
        <div className="mt-4 border border-black rounded-lg overflow-hidden">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/5boLwfhhUnqka202FQLNGs?utm_source=generator"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      )}
    </div>
  );
}
