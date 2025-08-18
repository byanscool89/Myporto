import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
<div id="experience" className="container py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">Experience</h2>


      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="mt-4">Experience</h5>
          <ul className="ps-3">
            <li className="mb-3">
              <h6>Administrator</h6>
              <p className="text-muted"> PT. Citra Van Titipan Kilat (TIKI) | Januari 2024 – Mei 2025</p>
              <p>
                Handled administrative tasks related to shipments, data entry, delivery orders, and billing.
                Also served as logistics supervisor, managing delivery schedules, monitoring operations,
                and coordinating logistics staff to ensure operational efficiency   </p>
            </li>

            <li className="mb-3">
              <h6>Administrator</h6>
              <p className="text-muted">PT. Bali Insan Perkasa  | June – August 2025</p>
              <p>
                Managed and analyzed administrative tasks while also handling finance-related
                responsibilities              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
