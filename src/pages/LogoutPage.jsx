// pages/LogoutPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear anything related to user session here
    localStorage.removeItem("userToken"); // or whatever you stored
    localStorage.removeItem("username");
    // You could also clear context / Redux state here if needed

    // Redirect to the homepage after 1 second
    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Logging out...</h2>
      <p>You’ll be redirected to the home page shortly.</p>
    </div>
  );
}
