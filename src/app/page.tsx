import Header from './homepage/components/Header';
import AboutMe from './homepage/components/AboutMe';
import Projects from './homepage/components/Projects'

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Header />
      <AboutMe />
      <Projects />
    </main>
  );
}