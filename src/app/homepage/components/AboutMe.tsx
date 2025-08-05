'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import CVModal from '../cv/CVModal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center px-4 py-16 pt-32 bg-[#5D4037]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/*LEFT SIDE*/}
        <div className="flex flex-col items-center md:items-center text-center space-y-6 text-[#FFEBCD]">
          <h2 className="text-3xl font-bold">Want to learn a bit more about me?</h2>
          <Link href="/about">
            <button
              className="bg-[#FFEBCD] text-[#4E342E] px-6 py-2 rounded-full font-medium hover:bg-[#FFDEAD] transition">
              More about me!
            </button>
          </Link>

          <div className="flex space-x-6 mt-2 justify-center">
            <a
              href="https://github.com/DeclanW1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFEBCD] hover:text-[#FFDEAD] text-2xl transition">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/declan-wood-ba67b4272/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFEBCD] hover:text-[#FFDEAD] text-2xl transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/*RIHT SIDE*/}
        <div
          className="w-full min-h-[400px] bg-[#795548] border border-[#6D4C41] rounded-xl shadow-md flex justify-center items-center text-[#FFEBCD] hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => setIsModalOpen(true)}>
            <img
              src="/cv-preview.png"
              alt="cv preview"
              className="w-full h-full filter filter blur-[2px]"
            />
        </div>
      </div>

      <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}