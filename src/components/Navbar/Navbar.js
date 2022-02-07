import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user, handleLogout } = useAuth();

  if (user) {
    return (
      <div className="Navbar">
        <Link className="NavbarLink" to="/">Home</Link>
        <Link className="NavbarLink" to="/projects">
          Projects
        </Link>
        <Link className="NavbarLink" to="/new-project">
          Create a project
        </Link>
        <button className="NavbarButton" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="Navbar">
      <Link className="NavbarLink" to="/login">Login</Link>
      <Link className="NavbarLink" style={{ marginLeft: "15px" }} to="/signup">
        Signup
      </Link>
    </div>
  );
}

export default Navbar;
