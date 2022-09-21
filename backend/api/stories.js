const storiesRouter = require("express").Router();
const prisma = require("../db/prisma");

//Get all stories
kittenRouter.get("/", async (req, res, next) => {
  try {
    const stories = await prisma.stories.findMany();
    res.send(stories);
  } catch (error) {
    next(error);
  }
});
module.exports = storiesRouter;
