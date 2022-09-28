import StoriesContext from "../context/StoriesContext";
import { useState, useEffect } from "react";
import { fetchAllStories } from "../api/stories";

export default function StoriesProvider({ children }) {
  const [allStories, setAllStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const result = await fetchAllStories();
      setAllStories(result);
    };
    getStories();
  }, []);

  return (
    <StoriesContext.Provider value={{ allStories, setAllStories }}>
      {children}
    </StoriesContext.Provider>
  );
}
