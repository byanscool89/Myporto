import React from 'react';

const Projects = () => {
  return (
<section id="projects" className="container py-5" data-aos="fade-up">
        <h2 className="mb-4 text-center">My Project</h2>
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="projek1.png" className="card-img-top" alt="Proyek 1" />
            <div className="card-body text-center">
              <h5 className="card-title">Sistem Informasi Perpustakaan</h5>
              <div className="d-flex justify-content-center gap-3 my-2">
                <img
                  src="logobootstrap5.png"
                  alt="Bootstrap"
                  style={{ height: '50px', objectFit: 'contain' }}
                />
                <img
                  src="laravel.png"
                  alt="Laravel"
                  style={{ height: '50px', objectFit: 'contain' }}
                />
              </div>
              <p className="card-text text-justify">
                A web-based Library Information System to manage books, members, borrowings, and returns.
                Built using Laravel and Bootstrap, it features login, search, fine calculation,
                and borrowing reports. It’s responsive and user-friendly, ideal for digitalizing school libraries.
              </p>
              <a
                href="https://perpussmpn3karanglewas.my.id/"
                className="btn btn-outline-primary btn-sm mt-2"
                target="_blank"
                rel="noreferrer"
              >
                Lihat
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 (duplikat) */}
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="pfigma.png" className="card-img-top" alt="Proyek 2" />
            <div className="card-body text-center">
              <h5 className="card-title">Sistem Informasi Perpustakaan</h5>
              <div className="d-flex justify-content-center gap-3 my-2">
                <img
                  src="figma.png"
                  alt="Bootstrap"
                  style={{ height: '35px', objectFit: 'contain' }}
                />
                <img
         
                />
              </div>
              <p className="card-text text-justify">
This UI/UX prototype is designed for the library information system of SMP Negeri 3 Karanglewas, focusing on easy access, user-friendly interface, and efficient interaction flow. It includes features such as login, registration, book search, borrowing, and returning, all arranged in a simple layout to ensure ease of use for students, teachers, and library staff.
              </p>
              <a
                href="https://www.figma.com/proto/VkBZXfDqnZgmAfGXfKX7VI/Untitled?node-id=1-2&p=f&t=fw63VWfBwwSKzdbc-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                className="btn btn-outline-primary btn-sm mt-2"
                target="_blank"
                rel="noreferrer"
              >
                Lihat
              </a>
            </div>
          </div>
        </div>

        {/* Tambahkan card lain di bawah ini jika diperlukan */}
  <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="projek1.png" className="card-img-top" alt="Proyek 2" />
            <div className="card-body text-center">
              <h5 className="card-title">Sistem Informasi Perpustakaan</h5>
              <div className="d-flex justify-content-center gap-3 my-2">
                <img
                  src="logobootstrap5.png"
                  alt="Bootstrap"
                  style={{ height: '50px', objectFit: 'contain' }}
                />
                <img
                  src="laravel.png"
                  alt="Laravel"
                  style={{ height: '50px', objectFit: 'contain' }}
                />
              </div>
              <p className="card-text text-justify">
                A web-based Library Information System to manage books, members, borrowings, and returns.
                Built using Laravel and Bootstrap, it features login, search, fine calculation,
                and borrowing reports. It’s responsive and user-friendly, ideal for digitalizing school libraries.
              </p>
              <a
                href="https://perpussmpn3karanglewas.my.id/"
                className="btn btn-outline-primary btn-sm mt-2"
                target="_blank"
                rel="noreferrer"
              >
                Lihat
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
