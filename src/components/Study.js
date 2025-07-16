import React from 'react';

const Study = () => {
  return (
<div id="study" className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">Education History</h2>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">SMAN 10 Kota Bogor</h5>
          <p className="card-text text-muted">2018 – 2021</p>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Universitas Teknologi Yogyakarta</h5>
          <p className="card-text text-muted">Bachelor’s Degree in Information Systems (2021 – 2025)</p>

          <h5 className="mt-4">Experience</h5>
          <ul className="ps-3">
            <li className="mb-3">
              <h6>Teaching Assistant – Big Data & Data Analytic</h6>
              <small className="text-muted">Universitas Teknologi Yogyakarta | 2024</small>
              <p>
                Assisted in delivering course materials, guiding students in practical sessions, and explaining concepts related to big data processing and analytics. Helped prepare learning materials and supported the lecturer in managing class activities.
              </p>
            </li>

            <li className="mb-3">
              <h6>Member of Information Systems Student Association (HMSI) – Public Relations Division</h6>
              <small className="text-muted">Universitas Teknologi Yogyakarta | 2022 – 2023</small>
              <p>
                Contributed to building external relations, managing event information, and assisting in publishing promotional content and social media documentation.
              </p>
            </li>

            <li className="mb-3">
              <h6>Chief Executive – Intercampus Comparative Study (HMSI)</h6>
              <small className="text-muted">Universitas Teknologi Yogyakarta | 2023</small>
              <p>
                Led the planning and execution of an intercampus comparative study event, coordinated all committee divisions, and ensured the event met its objectives effectively.
              </p>
            </li>

            <li>
              <h6>Public Relations – Information Systems Study Club</h6>
              <small className="text-muted">Universitas Teknologi Yogyakarta | 2022</small>
              <p>
                Responsible for disseminating event information, communicating with participants and speakers, and designing promotional materials for study club activities.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Study;
