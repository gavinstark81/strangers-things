import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <Link className="home" to="/">
        Home/Login
      </Link>

      <Link className="home" to="/Posts">
        Posts
      </Link>

      <Link className="home" to="/createPost">
        Create Post
      </Link>

      <Link className="home" to="/Messages">
        Messages
      </Link>

      <Link className="home" to="/Logout">
        Logout
      </Link>
    </nav>
  );
}
