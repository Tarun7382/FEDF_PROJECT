import React, { useState } from 'react';

export default function LoginPage({ role, onLogin, onBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (username && password) onLogin(username);
    else alert('Please enter both username and password');
  };

  // ... role styles as in earlier answers ...

  return (
    <div className={`login-background ${role}-login`}>
      <div className="login-container">
        <div className={`login-header ${role}-header`}>
          <h2><i className={`fas fa-${role === 'citizen' ? 'user' : role === 'politician' ? 'landmark' : 'cogs'}`}></i>
            {role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
          <p>Access your {role} dashboard</p>
        </div>
        <div className="login-body">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
              <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter your username" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
              <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
            </div>
          </div>
        </div>
        <div className="login-footer">
          <button type="button" className={`btn btn-login mb-3 ${role}-btn`} onClick={handleLogin}>Login to Platform</button>
          <div className="back-to-roles" onClick={onBack}>
            <i className="fas fa-arrow-left"></i> Back to role selection
          </div>
        </div>
      </div>
    </div>
  );
}
