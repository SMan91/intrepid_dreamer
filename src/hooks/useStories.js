import { useContext } from "react";
import StoriesContext from "../context/StoriesContext";

const useStories = () => {
  const { allStories, setAllStories } = useContext(StoriesContext);

  return {
    allStories,
    setAllStories,
  };
};

export default useStories;
