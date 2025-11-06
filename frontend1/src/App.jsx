import React, { useState } from 'react';
import RoleSelection from './components/RoleSelection';
import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar';
import CitizenSection from './components/CitizenSection';
import PoliticianSection from './components/PoliticianSection';
import ModeratorSection from './components/ModeratorSection';
import AdminSection from './components/AdminSection';
import './App.css';

export default function App() {
  // The current page: 'role', 'login', or 'main'
  const [page, setPage] = useState('role');
  // The selected role: 'citizen', 'politician', 'admin'
  const [role, setRole] = useState('');
  // Who is logged in (optional)
  const [username, setUsername] = useState('');
  // The section shown in the sidebar
  const [section, setSection] = useState('citizen');

  // Switches page to login and sets role
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setPage('login');
  };

  // When login is successful
  const handleLogin = (uname) => {
    setUsername(uname);
    setSection(role); // section = role, show correct dashboard
    setPage('main');
  };

  // Logout, back to start
  const handleLogout = () => {
    setPage('role');
    setRole('');
    setUsername('');
    setSection('citizen');
  };

  return (
    <>
      {page === 'role' && <RoleSelection onSelect={handleRoleSelect} />}
      {page === 'login' && (
        <LoginPage
          role={role}
          onLogin={handleLogin}
          onBack={() => setPage('role')}
        />
      )}
      {page === 'main' && (
        <div className="main-background">
          <Sidebar active={section} setActiveSection={setSection} onLogout={handleLogout} />
          <div className="content">
            <header>
              <div className="user-info">
                <i className="fas fa-user-circle"></i>{' '}
                <span>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
              </div>
              <h2>Citizen & Politician Interaction Platform</h2>
              <p>Transparency | Engagement | Responsiveness</p>
            </header>
            {section === 'citizen' && <CitizenSection />}
            {section === 'politician' && <PoliticianSection />}
            {section === 'moderator' && <ModeratorSection />}
            {section === 'admin' && <AdminSection />}
          </div>
        </div>
      )}
    </>
  );
}