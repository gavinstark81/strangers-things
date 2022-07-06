import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/"> Home/Login </Link>
      <Link to="/Posts"> Posts </Link>
      <Link to="/createPost"> Create Post </Link>
      <Link to="/Logout"> Logout </Link>
    </nav>
  );
}
