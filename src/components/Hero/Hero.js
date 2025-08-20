import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero-section py-5" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          {/* Card Profile - Kiri */}
          <div className="col-12 col-md-4">
            <div className="profile-card">
              <div className="card-header-shape">
                <div className="profile-picture">
                  <img src="pp.png" alt="Profile" />
                </div>
              </div>
              <div className="card-body">
                <h3 className="name">Febyan Putra</h3>

                {/* Loader Kata-Kata */}
                <div className="loader mt-3">
                  <p className="static-text text-dark">Enthusiastic With</p>
                  <div className="words">
                    <span className="word">Web Development</span>
                    <span className="word">UI/UX</span>
                    <span className="word">PHP</span>
                    <span className="word">JavaScript</span>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <ul className="social-links">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Summary - Kanan */}
          <div className="col-12 col-md-8">
            <div className="summary text-md-start text-center mt-4 mt-md-0">
              <h2><strong>Profile</strong></h2>
              <p>
                 Fresh graduate in Information Systems with hands-on experience in UI/UX design, web
 development, and public relations. Proficient in administration, logistics, and finance. Fast
 learner, adaptable, and an excellent team player. Passionate about leveraging technology to
 create efficient, user-centered solutions and eager to contribute to innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
