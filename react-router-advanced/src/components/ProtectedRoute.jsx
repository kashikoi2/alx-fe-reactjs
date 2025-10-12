import { Navigate } from "react-router-dom";

// Simple mock authentication check
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    alert("You must be logged in to view this page!");
    return <Navigate to="/login" replace />;
  }
  return children;
}
