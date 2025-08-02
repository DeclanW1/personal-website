'use client';
import { useState } from 'react';
import Modal from './components/Modal';
import CVContent from './cv/CVContent';
import PersonalStatement from './ps/PersonalStatement';
import SpotifyBox from './Spotify/SpotifyBox';

export default function HomePage() {
  const [showCV, setShowCV] = useState(false);
  const [showPS, setShowPS] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-white">
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          onClick={() => setShowCV(true)}
          className="bg-white text-black text-lg font-medium py-4 rounded-lg border border-black hover:shadow-md transition-all">
          My CV
        </button>
        <button
          onClick={() => setShowPS(true)}
          className="bg-white text-black text-lg font-medium py-4 rounded-lg border border-black hover:shadow-md transition-all">
          My Personal Statement
        </button>
      </div>

      <Modal title="My CV" isOpen={showCV} onClose={() => setShowCV(false)}>
        <CVContent />
      </Modal>

      <Modal title="Personal Statement" isOpen={showPS} onClose={() => setShowPS(false)}>
        <PersonalStatement />
      </Modal>

      <SpotifyBox />
    </main>
  );
}