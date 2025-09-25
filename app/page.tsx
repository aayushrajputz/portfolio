
'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import DSAProgress from '../components/DSAProgress';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DSAProgress />
      <Contact />
      <Footer />
    </main>
  );
}
