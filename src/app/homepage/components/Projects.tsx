'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Projects() {
  const router = useRouter();

  const placeholderProjects = [
    {
      title: 'Spotify Playlist Insights',
      slug: 'spotify',
      image: '',
      published: true,
    },
    {
      title: 'Project Two',
      slug: 'project-two',
      image: '/images/project2.png',
      published: false,
    },
    {
      title: 'Project Three',
      slug: 'project-three',
      image: '/images/project3.png',
      published: false,
    },
  ];

  const handleRedirect = (slug: string, published: boolean) => {
    if (published) {
      router.push(`/projects/${slug}`);
    } else {
      router.push('/comingsoon');
    }
  };

  return (
    <section
      id="projects"
      className="w-full bg-[#4E342E] py-16 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {placeholderProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleRedirect(project.slug, project.published)}
            className="bg-[#6D4C41] p-6 rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl h-96 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">
              {project.title}
            </h3>
            <div className="w-full h-64 bg-[#8D6E63] rounded-md overflow-hidden flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-full w-full"
                />
              ) : (
                <span className="text-[#D7CCC8]">No preview available</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push('/comingsoon')}
        className="bg-white text-[#4E342E] px-6 py-3 rounded-full font-medium hover:bg-[#D7CCC8] transition">
        View more
      </button>
    </section>
  );
}