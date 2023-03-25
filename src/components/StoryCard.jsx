import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUsers";

const StoryCard = ({ story }) => {
  console.log("story.img_url: ", story.img_url);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useUser();
  return (
    <div
      onClick={() => {
        navigate(`/Story/${story.id}`);
      }}
    >
      <img src={story.img_url} alt="Image for story." />
      <h3>{story.title}</h3>
      <p>{story.description}</p>

      {user.is_admin ? (
        <div>
          <div>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit story
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                deleteKitten(kitten.id);
                alert("Story Deleted");
                window.location.reload();
              }}
            >
              Delete Kitten
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default StoryCard;
