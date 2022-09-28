import React, { useState, useEffect } from "react";
import { fetchStoryById } from "../api/stories";
import { useParams } from "react-router-dom";

const SingleStory = () => {
  const [story, setStory] = useState({});
  const params = useParams();

  useEffect(() => {
    const getStoryById = async (storyId) => {
      const result = await fetchStoryById(storyId);
      setStory(result);
    };
    getStoryById(params.id);
  });

  return (
    <div>
      <h1>{story.title} </h1>
      <p>{story.story_text}</p>
    </div>
  );
};

export default SingleStory;
