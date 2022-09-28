import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.username}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
