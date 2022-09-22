import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/Stories">Stories </Link>
        <Link to="/Login">Login </Link>
      </nav>
    </div>
  );
};

export default NavBar;
