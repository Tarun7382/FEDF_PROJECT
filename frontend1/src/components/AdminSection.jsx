import React from 'react';

export default function AdminSection() {
  return (
    <div className="card">
      <div className="card-header card-header-custom">
        <h4 className="mb-0"><i className="fas fa-cogs"></i> Admin Dashboard</h4>
      </div>
      <div className="card-body">
        <p>⚙️ Manage platform, roles, and ensure data integrity.</p>
        <ul className="list-group mb-3">
          <li className="list-group-item"><i className="fas fa-users"></i> Manage Users</li>
          <li className="list-group-item"><i className="fas fa-file-alt"></i> System Logs</li>
          <li className="list-group-item"><i className="fas fa-database"></i> Backup Data</li>
          <li className="list-group-item"><i className="fas fa-chart-bar"></i> Analytics & Reports</li>
        </ul>
        <button className="btn btn-dark"><i className="fas fa-sliders-h"></i> Open Admin Panel</button>
      </div>
    </div>
  );
}
