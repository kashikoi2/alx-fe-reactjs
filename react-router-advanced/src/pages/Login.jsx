import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Login Page</h1>
      <button
        onClick={handleLogin}
        className="bg-green-600 text-white px-4 py-2 rounded mr-4"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
