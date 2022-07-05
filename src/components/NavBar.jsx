import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home/Login</Link>
      <Link to="/Posts">Posts</Link>
      {/* <Link to="/Login">Login</Link> */}
      <Link to="/Logout">Logout</Link>
    </nav>
  );
}

//navigate from home to posts... work on register, login after
