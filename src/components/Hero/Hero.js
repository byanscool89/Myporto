import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero-section text-center py-5" data-aos="fade-up">
      <div className="container">
        <div className="row justify-content-center">
          {/* Card Profile */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
