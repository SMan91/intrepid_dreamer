import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/users";
import useUser from "../hooks/useUsers";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          if (result.user) {
            alert("You are now logged in.");
            setUser({ loggedIn: true, ...result.user });
            navigate("/");
            // window.location.reload();
          } else {
            alert("Incorrect Login");
          }
        }}
      >
        <div>
          <label>Username:</label>
          <input
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        <Link id="registerClick" to="/Register">
          Don't have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
