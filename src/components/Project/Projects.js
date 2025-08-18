import React, { useEffect, useRef } from "react";
import "./Projects.css";

const AutoScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollSpeed = 1; // kecepatan pixel per frame
    let animationFrameId;

    const scroll = () => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0; // balik ke awal
      } else {
        el.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        display: "flex",
        overflowX: "hidden",
        gap: "10px",
        padding: "10px",
        scrollBehavior: "auto",
      }}
    >
      {children}
      {/* Duplikasi konten supaya looping lebih halus */}
      {children}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="container py-5" data-aos="fade-up">
      <h2 className="mb-4 text-center">My Project</h2>
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card mb-2 shadow-sm card-equal">
            <AutoScrollContainer>
              <img src="projek1.png" alt="Tampilan 1" style={imgStyle} />
              <img src="projek2.png" alt="Tampilan 2" style={imgStyle} />
              <img src="projek3.png" alt="Tampilan 3" style={imgStyle} />
              <img src="projek4.png" alt="Tampilan 4" style={imgStyle} />
              <img src="projek5.png" alt="Tampilan 5" style={imgStyle} />
            </AutoScrollContainer>
      <div className="card-body text-center"> <h5 className="card-title">Sistem Informasi Perpustakaan</h5>
       <div className="d-flex justify-content-center gap-1 my-2"> <img src="logobootstrap5.png" alt="Bootstrap" 
       style={{ height: '50px', objectFit: 'contain' }} /> <img src="laravel.png" alt="Laravel" style={{ height: '50px', objectFit: 'contain' }} />
        </div> <div className="scrollable-text"> <p className="card-text text-justify"> <strong>Sistem Informasi Perpustakaan Berbasis Web</strong><br />
         Sistem ini dirancang untuk mengelola data buku, anggota, peminjaman, dan pengembalian di perpustakaan. Dibangun menggunakan Laravel dan Bootstrap, sistem ini dilengkapi dengan fitur login, pencarian buku, perhitungan denda otomatis, 
         serta laporan peminjaman. Tampilan yang responsif dan user-friendly membuatnya cocok digunakan untuk digitalisasi 
         perpustakaan sekolah. <br /><br /> <strong>Peran Saya:</strong> Fullstack Developer
          (Desain, Backend, Frontend, Database)<br /> <strong>Tools:</strong> Laravel, Bootstrap, MySQL, 
          VS Code<br /> <strong>Fitur Utama:</strong> <ul className="text-start"> <li>Manajemen buku dan anggota</li>
           <li>Pencarian dan filter buku</li> <li>Penghitungan denda otomatis</li>
       <li>Laporan peminjaman dan pengembalian</li> </ul> </p> </div> </div> </div> </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card mb-2 shadow-sm card-equal">
            <AutoScrollContainer>
              <img src="sm1.png" alt="Beranda" style={imgStyle} />
              <img src="sm2.png" alt="Peta Darurat" style={imgStyle} />
              <img src="sm3.png" alt="Detail RS" style={imgStyle} />
            </AutoScrollContainer>
           <div className="card-body text-center"> <h5 className="card-title">UI/UX Siaga Medis</h5> <div className="d-flex justify-content-center gap-3 my-2"> <img src="figma.png" alt="Figma" style={{ height: '35px', objectFit: 'contain' }} /> </div> <div className="scrollable-text"> <p className="card-text text-justify"> Siaga Medis – Emergency Medical Assistance App is a mobile app designed to connect users with nearby medical facilities and emergency responders in real time. </p> <ul className="text-start"> <li>Real-time map of nearby hospitals, clinics, and pharmacies</li> <li>Emergency call button for instant ambulance request</li> <li>Filter by specialty, distance, and rating</li> <li>Location sharing with family & friends</li> </ul> <p><strong>My Role:</strong> UI/UX Designer<br /><strong>Tools:</strong> Figma, Illustrator</p> </div> </div> </div> </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card mb-2 shadow-sm card-equal">
            <AutoScrollContainer>
              <img src="7.png" alt="Laporan" style={imgStyle} />
              <img src="8.png" alt="Kasir" style={imgStyle} />
              <img src="9.png" alt="Laporan" style={imgStyle} />
              <img src="10.png" alt="Kasir" style={imgStyle} />
            </AutoScrollContainer>
           <div className="card-body text-center"> <h5 className="card-title">Point Of Sale</h5> <div className="d-flex justify-content-center gap-3 my-2"> <img src="logobootstrap5.png" alt="Bootstrap" style={{ height: '50px', objectFit: 'contain' }} /> <img src="php.png" alt="PHP" style={{ height: '50px', objectFit: 'contain' }} /> </div> <div className="scrollable-text"> <p className="card-text text-justify"> SmartPOS is a modern POS app that helps small businesses manage sales, inventory, and transactions with ease. </p> <ul className="text-start"> <li>Fast checkout process</li> <li>Inventory management</li> <li>Multi-device support</li> <li>Sales reporting</li> </ul> </div> </div> </div> </div>

         <div className="col-md-4">
          <div className="card mb-2 shadow-sm card-equal">
            <AutoScrollContainer>
              <img src="gp1.png" alt="Laporan" style={imgStyle} />
              <img src="gp2.png" alt="Kasir" style={imgStyle} />
              <img src="gp3.png" alt="Laporan" style={imgStyle} />
  
            </AutoScrollContainer>
           <div className="card-body text-center"> <h5 className="card-title">GoPark</h5> <div className="d-flex justify-content-center gap-1"> <img src="logobootstrap5.png" alt="Bootstrap" style={{ height: '50px', objectFit: 'contain' }} /> <img src="php.png" alt="PHP" style={{ height: '50px', objectFit: 'contain' }} /> </div> <div className="scrollable-text"> <p className="card-text text-justify"> GoPark – Smart Parking Finder App is a map-based app that helps users locate, filter, and reserve nearby parking spots in real time. </p> <ul className="text-start"> <li>Interactive map with real-time availability</li> <li>Filter by price, distance, and vehicle type</li> <li>Reservation & in-app payment</li> </ul> <p><strong>My Role:</strong> UI/UX Designer<br /><strong>Tools:</strong> Figma, Illustrator</p> </div> </div> </div> </div>

      </div>
    </section>
  );
};

// Style untuk gambar
const imgStyle = {
  height: "200px",
  flex: "0 0 auto",
  borderRadius: "8px",
};

export default Projects;
