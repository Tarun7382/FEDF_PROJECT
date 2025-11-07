import React, { useState } from "react";

export default function ModeratorSection() {
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => {
    setLogs((prev) => [...prev, { id: Date.now(), message: msg }]);
  };

  return (
    <div className="dashboard-section">
      <h3>Moderator Dashboard</h3>
      <p>Monitor reports and maintain system integrity.</p>

      <button
        className="btn-login admin-btn"
        onClick={() => addLog("Checked citizen reports.")}
      >
        Add Log Entry
      </button>

      <div className="card">
        <h4>Activity Logs</h4>
        {logs?.length > 0 ? (
          <ul>
            {logs.map((l) => (
              <li key={l.id}>{l.message}</li>
            ))}
          </ul>
        ) : (
          <p>No logs recorded yet.</p>
        )}
      </div>
    </div>
  );
}
