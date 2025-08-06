import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/home">Home</Link>{" | "}
      <Link to="/login">Login</Link>{" | "}
      <Link to="/habits">Show Habits</Link>{" | "}
      <Link to="/logout">Logout</Link>
    </nav>
  );
}

export default Navbar;
