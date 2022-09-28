const storiesRouter = require("express").Router();
const prisma = require("../db/prisma");

//Get all stories
storiesRouter.get("/", async (req, res, next) => {
  try {
    const stories = await prisma.stories.findMany();
    res.send(stories);
  } catch (error) {
    next(error);
  }
});

//get story by ID
storiesRouter.get("/:id", async (req, res, next) => {
  try {
    const storyId = +req.params.id;
    const singleStory = await prisma.stories.findUnique({
      where: {
        id: storyId,
      },
    });
    res.send(singleStory);
  } catch (error) {
    next(error);
  }
});

//get story by title
storiesRouter.get("/:title", async (req, res, next) => {
  try {
    const storyByTitle = await prisma.stories.findUnique({
      where: {
        name: +req.params.title,
      },
    });
    res.send(storyByTitle);
  } catch (error) {
    next(error);
  }
});

//create story
storiesRouter.post("/", async (req, res, next) => {
  try {
    const { title, description, story_text } = req.body;
    const createdStory = await prisma.stories.create({
      data: { title, description, story_text },
    });
    res.send(createdStory);
  } catch (error) {
    next(error);
  }
});

//update story
storiesRouter.patch("/:id", async (req, res, next) => {
  try {
    const storyId = +req.params.id;
    const { title, description, story_text } = req.body;
    const updatedStory = await prisma.stories.update({
      where: {
        id: storyId,
      },
      data: { title, description, story_text },
    });

    res.send(updatedStory);
  } catch (error) {
    next(error);
  }
});

//Delete Story
storiesRouter.delete("/:id", async (req, res, next) => {
  try {
    const storyId = +req.params.id;
    const deletedStory = await prisma.stories.delete({
      where: {
        id: storyId,
      },
    });
    res.send(deletedStory);
  } catch (error) {
    next(error);
  }
});

module.exports = storiesRouter;
