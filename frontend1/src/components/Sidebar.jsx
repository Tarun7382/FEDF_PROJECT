import React from 'react';

function Sidebar({ active, setActiveSection, onLogout }) {
  const items = [
    { id: 'citizen', icon: 'fa-user', label: 'Citizen' },
    { id: 'politician', icon: 'fa-landmark', label: 'Politician' },
    { id: 'moderator', icon: 'fa-shield-alt', label: 'Moderator' },
    { id: 'admin', icon: 'fa-cogs', label: 'Admin' },
  ];
  return (
    <div className="sidebar">
      <h3 className="text-center mb-4"><i className="fas fa-users"></i><br />Civic Connect</h3>
      {items.map(i => (
        <a
          key={i.id}
          href="#"
          className={active === i.id ? 'active' : ''}
          onClick={e => { e.preventDefault(); setActiveSection(i.id); }}
        >
          <i className={`fas ${i.icon}`}></i> {i.label}
        </a>
      ))}
      <a href="#" onClick={e => { e.preventDefault(); onLogout(); }} style={{ marginTop: 50 }}>
        <i className="fas fa-sign-out-alt"></i> Logout
      </a>
    </div>
  );
}

export default Sidebar;
