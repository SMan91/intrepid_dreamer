import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../api/users";
import useUser from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
      </nav>

      {user.username ? (
        <button
          onClick={async () => {
            const result = await logoutUser();
            setUser({ loggedIn: false });
          }}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default NavBar;
