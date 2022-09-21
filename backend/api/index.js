const apiRouter = require("express").Router();

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const storiesRouter = require("./stories");
apiRouter.use("/stories", storiesRouter);
