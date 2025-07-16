import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Study from './components/Study';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react'; // jangan lupa import useEffect



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true      // animasi hanya sekali saat scroll pertama
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Study />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
