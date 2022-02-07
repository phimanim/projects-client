import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, handleLogout } = useAuth();

  if (user) {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link style={{ margin: "0 15px" }} to="/projects">
          Projects
        </Link>
        <Link style={{ margin: "0 15px" }} to="/new-project">
          Create a project
        </Link>
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  return (
    <div>
      <Link to="/login">Login</Link>
      <Link style={{ marginLeft: "15px" }} to="/signup">
        Signup
      </Link>
    </div>
  );
}

export default Navbar;
