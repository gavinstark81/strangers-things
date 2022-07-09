import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/"> Home/Login </Link>
      <Link to="/Posts"> Posts </Link>
      <Link to="/createPost"> Create Post </Link>
      <Link to="/Logout"> Logout </Link>
      <Link to="/Messages">Messages</Link>
    </nav>
  );
}
