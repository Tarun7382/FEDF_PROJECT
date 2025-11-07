import React, { useState } from "react";

export default function AdminSection() {
  const [users, setUsers] = useState([]);

  const addUser = () => {
    const name = prompt("Enter new user name:");
    if (name) setUsers((prev) => [...prev, { id: Date.now(), name }]);
  };

  return (
    <div className="dashboard-section">
      <h3>Admin Dashboard</h3>
      <p>Manage users and oversee all activity.</p>

      <button className="btn-login admin-btn" onClick={addUser}>
        Add User
      </button>

      <div className="card">
        <h4>Registered Users</h4>
        {users?.length > 0 ? (
          <ul>
            {users.map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        ) : (
          <p>No users added yet.</p>
        )}
      </div>
    </div>
  );
}
