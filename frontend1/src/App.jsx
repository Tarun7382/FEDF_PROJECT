import React, { useState } from "react";
import RoleSelection from "./components/RoleSelection";
import LoginPage from "./components/LoginPage";
import Sidebar from "./components/Sidebar";
import CitizenSection from "./components/CitizenSection";
import PoliticianSection from "./components/PoliticianSection";
import ModeratorSection from "./components/ModeratorSection";
import AdminSection from "./components/AdminSection";
import { ReportProvider } from "./components/ReportContext";


import "./App.css";

export default function App() {
  const [page, setPage] = useState("role");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [section, setSection] = useState("citizen");

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setPage("login");
  };

  const handleLogin = (uname) => {
    setUsername(uname);
    setSection(role);
    setPage("main");
  };

  const handleLogout = () => {
    setPage("role");
    setRole("");
    setUsername("");
    setSection("citizen");
  };

  return (
    <ReportProvider>
      {page === "role" && <RoleSelection onSelect={handleRoleSelect} />}
      {page === "login" && (
        <LoginPage role={role} onLogin={handleLogin} onBack={() => setPage("role")} />
      )}
      {page === "main" && (
        <div className="main-background">
          <Sidebar active={section} setActiveSection={setSection} onLogout={handleLogout} />
          <div className="content">
            <header>
              <div className="user-info">
                <i className="fas fa-user-circle"></i> {role.toUpperCase()}
              </div>
              <h2>Citizen & Politician Interaction Platform</h2>
              <p>Transparency | Engagement | Responsiveness</p>
            </header>

            {section === "citizen" && <CitizenSection />}
            {section === "politician" && <PoliticianSection />}
            {section === "moderator" && <ModeratorSection />}
            {section === "admin" && <AdminSection />}
          </div>
        </div>
      )}
    </ReportProvider>
  );
}
