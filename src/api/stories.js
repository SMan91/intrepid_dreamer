export const fetchAllStories = async () => {
  const response = await fetch(`/api/stories`);
  const result = await response.json();
  return result;
};

export const fetchStoryById = async (id) => {
  const response = await fetch(`/api/stories/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const createStory = async ({ title, description, story_text }) => {
  const response = await fetch(`api/stories/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      story_text,
    }),
  });
  const result = await response.json();
  return result;
};

export const updateStory = async ({
  storyId,
  title,
  description,
  story_text,
}) => {
  const response = await fetch(`api/stories/${storyId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      story_text,
    }),
  });
  const result = await response.json();

  return result;
};

export const deleteStory = async (storyId) => {
  const response = await fetch(`/api/stories/${storyId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
