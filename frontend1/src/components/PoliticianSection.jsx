import React from 'react';
import ContributionChart from './ContributionChart';

export default function PoliticianSection() {
  return (
    <>
      <div className="card">
        <div className="card-header card-header-custom">
          <h4 className="mb-0">
            <i className="fas fa-landmark"></i> Politician Dashboard
          </h4>
        </div>
        <div className="card-body">
          <p>✅ Respond to citizen concerns, post updates, and engage.</p>
          <textarea className="form-control" rows="4" placeholder="Write an update for citizens..."></textarea>
          <button className="btn btn-success mt-3">
            <i className="fas fa-share"></i> Post Update
          </button>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header card-header-custom">
          <h4 className="mb-0">
            <i className="fas fa-clipboard-list"></i> Citizen Reports
          </h4>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fas fa-lightbulb text-warning"></i> Streetlights not working in Ward 12
            </li>
            <li className="list-group-item">
              <i className="fas fa-trash text-danger"></i> Garbage collection delayed in Zone 3
            </li>
            <li className="list-group-item">
              <i className="fas fa-tint text-primary"></i> Water supply issues in North District
            </li>
          </ul>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header card-header-custom">
          <h4 className="mb-0">
            <i className="fas fa-info-circle"></i> Politician Details & Progress
          </h4>
        </div>
        <div className="card-body" id="politicianList">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text"><strong>Address:</strong> 123 Main St, City</p>
              <p className="card-text"><strong>Domain:</strong> Infrastructure</p>
              <p className="card-text"><strong>Problem resolution progress:</strong></p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '75%' }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  75%
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text"><strong>Address:</strong> 456 Elm St, Town</p>
              <p className="card-text"><strong>Domain:</strong> Healthcare</p>
              <p className="card-text"><strong>Problem resolution progress:</strong></p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: '60%' }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  60%
                </div>
              </div>
            </div>
          </div>
          {/* Add more politicians if needed */}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-header card-header-custom">
          <h4 className="mb-0">
            <i className="fas fa-chart-bar"></i> Contributions Overview
          </h4>
        </div>
        <div className="card-body" style={{ height: 250 }}>
          <ContributionChart />
        </div>
      </div>
    </>
  );
}
