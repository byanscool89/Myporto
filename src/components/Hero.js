import React from 'react';

const Hero = () => {
  return (
<div id="home" className="text-center py-5 bg-light" data-aos="fade-up">
  <img
        src="/pp.png"
        alt="Foto Saya"
        className="img-fluid rounded-circle mb-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <h1>Hi, I'm Febyan</h1>
      <p className="lead">Fresh Graduate | Information Systems</p>
    
      <div className="card mx-auto mt-4" style={{ maxWidth: '700px' }}>
        <div className="card-body">
          <h5 className="card-title">Profile Summary</h5>
          <p className="card-text">
            A fresh graduate in Information Systems from Universitas Teknologi Yogyakarta with a strong interest in UI/UX Design (Figma), web development using Laravel, and proficiency in Microsoft Office. Gained academic experience as a Teaching Assistant for the Big Data & Data Analytics course, which enhanced analytical thinking, communication, and a sense of responsibility. Highly motivated to learn new things, capable of working both independently and in teams, and open to relocation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
