import React, { useState } from "react";
import SignUp from "./SignUp";
import "./LoginSignup.css";

export default function LoginPage({ role, onLogin, onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.role === role
    );

    if (existingUser) {
      alert(`✅ Welcome back, ${existingUser.username}!`);
      onLogin(existingUser.username, existingUser.role); // ⬅ Redirects to dashboard
    } else {
      alert("❌ Invalid credentials or incorrect role. Try again or Sign Up.");
    }
  };

  const handleSignUpComplete = () => {
    alert("✅ Account created successfully! You can now log in.");
    setShowSignUp(false); // return to login screen automatically
  };

  return (
    <div
      className={`login-background ${
        role === "citizen"
          ? "citizen-login"
          : role === "politician"
          ? "politician-login"
          : "admin-login"
      }`}
    >
      {!showSignUp ? (
        <div className="login-container">
          <div
            className={`login-header ${
              role === "citizen"
                ? "citizen-header"
                : role === "politician"
                ? "politician-header"
                : "admin-header"
            }`}
          >
            <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
          </div>

          <div className="login-body">
            <form onSubmit={handleSignIn}>
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
              <button
                type="submit"
                className={`btn-login ${
                  role === "citizen"
                    ? "citizen-btn"
                    : role === "politician"
                    ? "politician-btn"
                    : "admin-btn"
                }`}
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="login-footer">
            <p>
              Don’t have an account?{" "}
              <span
                onClick={() => setShowSignUp(true)}
                style={{
                  color: "#3498db",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </span>{" "}
              |{" "}
              <span
                onClick={onBack}
                style={{
                  color: "#555",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                ⬅ Back
              </span>
            </p>
          </div>
        </div>
      ) : (
        <SignUp onComplete={handleSignUpComplete} />
      )}
    </div>
  );
}
