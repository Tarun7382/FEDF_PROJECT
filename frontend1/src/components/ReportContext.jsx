import React, { createContext, useState, useContext, useEffect } from "react";

const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  // Load reports from localStorage when app starts
  useEffect(() => {
    const storedReports = localStorage.getItem("reports");
    if (storedReports) setReports(JSON.parse(storedReports));
  }, []);

  // Save reports whenever they change
  useEffect(() => {
    localStorage.setItem("reports", JSON.stringify(reports));
  }, [reports]);

  // Citizen adds a report
  const addReport = (text, user = "Citizen") => {
    const newReport = {
      id: Date.now(),
      text,
      status: "Pending",
      user,
      date: new Date().toLocaleString(),
    };
    setReports((prev) => [...prev, newReport]);
  };

  // Politician updates a report status
  const updateReportStatus = (id, newStatus) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  return (
    <ReportContext.Provider value={{ reports, addReport, updateReportStatus }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReports = () => useContext(ReportContext);
