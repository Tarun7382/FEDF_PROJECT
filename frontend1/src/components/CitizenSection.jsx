import React, { useState } from "react";
import { useReports } from "./ReportContext";



export default function CitizenSection() {
  const { reports, addReport } = useReports();
  const [newReport, setNewReport] = useState("");

  const handleSubmit = () => {
    if (newReport.trim()) {
      addReport(newReport);
      setNewReport("");
    }
  };

  return (
    <div className="dashboard-section">
      <h3>Citizen Dashboard</h3>
      <div className="card">
        <h4>Report an Issue</h4>
        <textarea
          value={newReport}
          onChange={(e) => setNewReport(e.target.value)}
          placeholder="Describe your issue..."
          rows={3}
          style={{ width: "100%", padding: "10px" }}
        />
        <button className="btn-login citizen-btn" onClick={handleSubmit}>
          Submit Report
        </button>
      </div>

      <div className="card">
        <h4>Your Reports</h4>
        {reports?.length > 0 ? (
          <ul>
            {reports.map((r) => (
              <li key={r.id}>
                <b>{r.text}</b> — Status:{" "}
                <span style={{ color: r.status === "Resolved" ? "green" : "orange" }}>
                  {r.status}
                </span>
                <br />
                <small>{r.date}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reports yet.</p>
        )}
      </div>
    </div>
  );
}
