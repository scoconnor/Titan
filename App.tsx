import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DebtorProfileViewer from "./pages/DebtorProfileViewer";
import Logout from "./pages/Logout";

// Placeholder Components — replace with real components as you build
const ContactCenter = () => <div className="p-4">Omni-Channel Contact Center (Placeholder)</div>;
const PaymentTools = () => <div className="p-4">Payment & Arrangement Tools (Placeholder)</div>;
const ComplianceControls = () => <div className="p-4">Compliance Controls (Placeholder)</div>;

// Simple mock auth check (replace later with real logic)
const isAuthenticated = () => {
  return localStorage.getItem("employeeToken") !== null;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />

        <Route
          path="/debtor/:id"
          element={isAuthenticated() ? <DebtorProfileViewer /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact-center"
          element={isAuthenticated() ? <ContactCenter /> : <Navigate to="/login" />}
        />
        <Route
          path="/payments"
          element={isAuthenticated() ? <PaymentTools /> : <Navigate to="/login" />}
        />
        <Route
          path="/compliance"
          element={isAuthenticated() ? <ComplianceControls /> : <Navigate to="/login" />}
        />

        {/* Catch-all route (e.g. visiting root or unknown route) */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated() ? "/contact-center" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}
