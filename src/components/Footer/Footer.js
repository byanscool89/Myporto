import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (

<footer className="el bg-dark text-white py-4 mt-5">
  <div className="container text-center">
    <h5 className="mb-3">Contact</h5>
    <div className="d-flex justify-content-center gap-4 flex-wrap">
      <a href="mailto:kamu@example.com" className="text-white text-decoration-none">
        📧 Email
      </a>
      <a
        href="https://wa.me/6285174140342"
        className="text-white text-decoration-none"
        target="_blank"
        rel="noreferrer"
      >
        📱 WhatsApp
      </a>
      <a
        href="https://instagram.com/febyan.puther"
        className="text-white text-decoration-none"
        target="_blank"
        rel="noreferrer"
      >
        📷 Instagram
      </a>
      <a
        href="https://linkedin.com/in/febyanputra"
        className="text-white text-decoration-none"
        target="_blank"
        rel="noreferrer"
      >
        💼 LinkedIn
      </a>
      <a
        href="https://github.com/febyanputra"
        className="text-white text-decoration-none"
        target="_blank"
        rel="noreferrer"
      >
        🐱 GitHub
    
      </a>
    </div>

    <hr className="bg-secondary my-3" />
    <p className="mb-0 text-muted">&copy; 2024 Febyan Putra. All rights reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
