import React from "react";
import { useReports } from "./ReportContext";



export default function PoliticianSection() {
  const { reports, updateReportStatus } = useReports();

  return (
    <div className="dashboard-section">
      <h3>Politician Dashboard</h3>
      <p>Review citizen issues and update their status.</p>

      <div className="card">
        <h4>Citizen Reports</h4>
        {reports?.length > 0 ? (
          reports.map((r) => (
            <div key={r.id} className="report-item" style={{ marginBottom: "10px" }}>
              <p><b>{r.text}</b></p>
              <p>
                Status:{" "}
                <span style={{ color: r.status === "Resolved" ? "green" : "orange" }}>
                  {r.status}
                </span>
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  className="btn-login politician-btn"
                  onClick={() => updateReportStatus(r.id, "In Progress")}
                >
                  Mark In Progress
                </button>
                <button
                  className="btn-login admin-btn"
                  onClick={() => updateReportStatus(r.id, "Resolved")}
                >
                  Mark Resolved
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No citizen reports yet.</p>
        )}
      </div>
    </div>
  );
}
