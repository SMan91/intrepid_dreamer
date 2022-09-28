import React, { useState } from "react";
import { registerUser } from "../api/users";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useUsers";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log("Submitting");
          const result = await registerUser(username, password, email);
          console.log("result from api in register", result);
          if (result.user) {
            alert("You are registered!");
            setUser({ loggedIn: true, ...result.user });
            navigate("/");
          } else {
            alert("Username already taken");
          }
        }}
      >
        <div>
          <label>Username</label>
          <input
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Email</label>
          <input
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
