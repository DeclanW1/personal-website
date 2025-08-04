'use client';
import { useState } from 'react';
import Link from 'next/link';
import Modal from './components/Modal';
import CVContent from './cv/CVContent';
import PersonalStatement from './ps/PersonalStatement';

export default function HomePage() {
  const [showCV, setShowCV] = useState(false);
  const [showPS, setShowPS] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-white">
      <div className="flex flex-col gap-4 w-full max-w-lg">
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

        <Link href="/Spotify">
          <button
            className="bg-white text-black text-lg font-medium py-4 rounded-lg border border-black hover:shadow-md transition-all">
            What I would consider to be the top 100 songs, ever. (work in progress)
          </button>
        </Link>
      </div>

      <Modal isOpen={showCV} onClose={() => setShowCV(false)}>
        <CVContent />
      </Modal>

      <Modal isOpen={showPS} onClose={() => setShowPS(false)}>
        <PersonalStatement />
      </Modal>
    </main>
  );
}