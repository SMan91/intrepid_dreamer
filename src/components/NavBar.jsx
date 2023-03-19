import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../api/users";
import useUser from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const { user, setUser } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        {/* <Link to="/Stories">Stories </Link> */}
        {/* {user.loggedIn ? (
          <button
            onClick={async () => {
              const result = await logoutUser();
              setUser({ loggedIn: false });
              alert("You have been logged out");
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/Login">Login</Link>
        )} */}
      </nav>
    </div>
  );
};

export default NavBar;
