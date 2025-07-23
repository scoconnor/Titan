// src/pages/Logout.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("employeeToken");
    navigate("/login");
  }, [navigate]);

  return null; // Or show a "Logging out..." message
};

export default Logout;

