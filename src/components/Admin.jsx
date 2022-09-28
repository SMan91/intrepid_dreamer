import React, { useState } from "react";
import useUser from "../hooks/useUsers";
import UserCard from "./UserCard";

const Admin = () => {
  const { allUsers, setAllUsers } = useUser();
  const [storyText, setStoryText] = useState("undefined");
  console.log("All Users:", allUsers);
  return (
    <div>
      <h2>Users:</h2>
      {allUsers.map((user) => {
        return (
          <div>
            <UserCard key={`${user.id}`} user={user} />
          </div>
        );
      })}

      <input
        type="file"
        // value={storyText}
        onChange={(e) => setStoryText(e.target.value)}
      />
      <button
        onClick={() => {
          console.log("Story Text:", storyText);
        }}
      >
        Submit file
      </button>
    </div>
  );
};

export default Admin;
