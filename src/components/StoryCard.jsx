import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCard = ({ story }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/Story/${story.id}`);
      }}
    >
      <img src={story.img_url} alt="Image for story." />
      <h3>{story.title}</h3>
      <p>{story.description}</p>
    </div>
  );
};

export default StoryCard;
