import React from "react";
import useStories from "../hooks/useStories";
import StoryCard from "./StoryCard";

const Home = () => {
  const { allStories, setAllStories } = useStories();
  let storiesToDisplay; // This may change into a ternary operator later if I implement search/sort functionality
  if (allStories) {
    storiesToDisplay = allStories;
  }

  return (
    <div>
      Stories
      <div>
        {storiesToDisplay.map((story) => {
          return (
            <div>
              <StoryCard key={`${story.id}`} story={story} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
