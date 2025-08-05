'use client';
import React from 'react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-[#4E342E] border-b border-[#3E2723] z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <ul className="flex space-x-8 text-[#FFEBCD] font-medium text-lg">
          <li
            className="cursor-pointer hover:text-[#FFDEAD] transition"
            onClick={() => scrollToSection('about')}>
            About Me
          </li>
          <li
            className="cursor-pointer hover:text-[#FFDEAD] transition"
            onClick={() => scrollToSection('projects')}>
            My Projects
          </li>
          <li
            className="cursor-pointer hover:text-[#FFDEAD] transition"
            onClick={() => scrollToSection('spotify')}>
            Spotify
          </li>
        </ul>
      </nav>
    </header>
  );
}