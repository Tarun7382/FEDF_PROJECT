import React, { useState } from "react";
import "./LoginSignup.css";

export default function SignUp({ onComplete }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");

  const handleSignUp = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.username === username)) {
      alert("⚠️ Username already exists!");
      return;
    }

    const newUser = { username, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // ⬇ Automatically go back to login
    onComplete();
  };

  return (
    <div className="login-background signup-background">
      <div className="login-container">
        <div className="login-header" style={{ background: "#3498db" }}>
          <h2>Create Account</h2>
        </div>

        <div className="login-body">
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Select Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="citizen">Citizen</option>
              <option value="politician">Politician</option>
              <option value="admin">Administrator</option>
            </select>

            <button type="submit" className="btn-login citizen-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
