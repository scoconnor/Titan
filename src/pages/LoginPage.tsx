import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the authentication token
    localStorage.removeItem("employeeToken");

    // Redirect to the login page
    navigate("/login");
  }, [navigate]);

  return null; // No UI needed for logout page
};

export default Logout;
