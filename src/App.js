import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Projects from './components/Project/Projects';
import Footer from './components/Footer/Footer';
import Study from './components/Study/Study';
import Experience from './components/Experience/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss'; // pastikan import CSS di sini

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
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
