import React from "react";
import { useAuth } from "../../context/AuthContext";

function Main() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome {user?.email}</h2>
      <p>Share your projects with us</p>
    </div>

  );
}

export default Main;
