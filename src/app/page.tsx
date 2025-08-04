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
    <main className="bg-[#f5f0eb] text-[#3b2f2f] min-h-screen px-4 pt-8">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Hey, I’m Dec.</h1>
        <p className="text-lg text-[#5b4a4a]">
        A junior developer with a passion for clean code, learning fast, and building things that matter.
        </p>
      </div>

      <div className="flex items-center justify-center h-[calc(100vh-160px)]">
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <button
            onClick={() => setShowCV(true)}
            className="bg-[#7c3f00] hover:bg-[#652f00] text-white text-lg font-medium py-4 px-6 rounded-lg shadow-md transition-all w-full">
            My CV
          </button>

          <button
            onClick={() => setShowPS(true)}
            className="bg-white text-[#7c3f00] border border-[#d3c5b0] text-lg font-medium py-4 px-6 rounded-lg hover:bg-[#fdf6f0] transition-all w-full">
            My Personal Statement
          </button>

          <Link href="/Spotify">
            <button
              className="bg-white text-[#7c3f00] border border-[#d3c5b0] text-lg font-medium py-4 px-6 rounded-lg hover:bg-[#fdf6f0] transition-all w-full">
              What I would consider to be the top 100 songs, ever. (work in progress)
            </button>
          </Link>
        </div>
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