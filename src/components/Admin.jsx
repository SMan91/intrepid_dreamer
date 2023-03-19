import React, { useState } from "react";
import { createStory } from "../api/stories";
import useUser from "../hooks/useUsers";
import UserCard from "./UserCard";

const Admin = () => {
  const { allUsers, setAllUsers } = useUser();
  const [storyText, setStoryText] = useState("");
  const [storyTitle, setStoryTitle] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  // console.log("All Users:", allUsers);
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

      {/* Add a story to the database */}
      <h2>Add a story to the database</h2>
      <input
        value={storyTitle}
        placeholder="Story Title"
        onChange={(e) => setStoryTitle(e.target.value)}
      />
      <input
        value={storyDescription}
        placeholder="Story Description"
        onChange={(e) => setStoryDescription(e.target.value)}
      />
      <input
        // type="file"
        value={storyText}
        placeholder="Story Text"
        style={{ width: "1000px", height: "500px" }}
        onChange={(e) => setStoryText(e.target.value)}
      />

      <input
        value={imgUrl}
        placeholder="Image URL"
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button
        onClick={async () => {
          console.log("Story Title:", storyTitle);
          console.log("Story Description:", storyDescription);
          console.log("Story Text:", storyText);
          const result = await createStory({
            title: storyTitle,
            description: storyDescription,
            story_text: storyText,
            img_url: imgUrl,
          });
          console.log(result);
          setStoryTitle("");
          setStoryText("");
          setStoryDescription("");
        }}
      >
        Submit Story
      </button>
    </div>
  );
};

export default Admin;
