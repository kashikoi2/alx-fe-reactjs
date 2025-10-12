import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <nav className="flex gap-4 my-4">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Route Content */}
      <Outlet />
    </div>
  );
}
