import React from 'react';
import "./Navbar.css";
import "./Navbar.scss";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top py-1 border-b border-pink-600 shadow-sm">
      <div className="stars">
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="star"></div>
    ))}
  </div>
      <div className="container">
        <a className="navbar-brand shine-text fw-bold text-primary" href="#home">FebyanDev</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto menu">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#study">Study</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#footer">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
