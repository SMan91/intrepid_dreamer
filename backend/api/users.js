const usersRouter = require("express").Router();
const prisma = require("../db/prisma");

module.exports = usersRouter;
usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await prisma.users.findMany();
    res.send(users);
  } catch (error) {
    next(error);
  }
});
module.exports = usersRouter;
