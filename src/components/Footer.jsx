import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUsers";

const Footer = () => {
  const { user } = useUser();
  return <div>{user.is_admin ? <Link to="/Admin">ADMIN</Link> : null}</div>;
};

export default Footer;
