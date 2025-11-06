import React, { useState } from 'react';
import AreaSelector from './AreaSelector';

function CitizenSection() {
  const [selectedArea, setSelectedArea] = useState('rural');
  const [reportText, setReportText] = useState('');
  function submitReport() {
    if (reportText.trim() === '') {
      alert('Please enter a report before submitting.');
      return;
    }
    alert(`Report submitted successfully for ${selectedArea} area!\n\nReport: ${reportText}`);
    setReportText('');
  }
  return (
    <>
      <div className="card">
        <div className="card-header card-header-custom">
          <h4 className="mb-0"><i className="fas fa-bullhorn"></i> Citizen Dashboard</h4>
        </div>
        <div className="card-body">
          <p>📢 Report issues, provide feedback, and get updates.</p>
          <AreaSelector
            selectedArea={selectedArea}
            setSelectedArea={setSelectedArea}
            reportText={reportText}
            setReportText={setReportText}
          />
          <textarea
            className="form-control"
            value={reportText}
            onChange={e => setReportText(e.target.value)}
            rows="4"
            placeholder="Report an issue or give feedback..."
          ></textarea>
          <button className="btn btn-primary mt-3" onClick={submitReport}>
            <i className="fas fa-paper-plane"></i> Submit Report
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-header card-header-custom">
          <h4 className="mb-0"><i className="fas fa-newspaper"></i> Latest Updates from Politicians</h4>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fas fa-road text-warning"></i> Road repair work starting next week in your area.
            </li>
            <li className="list-group-item">
              <i className="fas fa-hospital text-info"></i> New healthcare initiative announced.
            </li>
            <li className="list-group-item">
              <i className="fas fa-tree text-success"></i> Community park renovation planned for next month.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CitizenSection;
