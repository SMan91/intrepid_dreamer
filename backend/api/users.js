const usersRouter = require("express").Router();
const prisma = require("../db/prisma");
const { authRequired } = require("./utils");

usersRouter.get("/all_users", authRequired, async (req, res, next) => {
  try {
    const users = await prisma.users.findMany();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

//Retrieve the logged in user's data
usersRouter.get("/me", authRequired, async (req, res, next) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//Register a new user
usersRouter.post("/register", async (req, res, next) => {
  try {
    let { username, password, email } = req.body;
    password = await bcrypt.hash(password, SALT_ROUNDS);

    const checkUser = await prisma.users.findUnique({
      where: { username },
    });
    if (checkUser) {
      // Send and error status?
      res.send({ message: "User already exists!", error: "Invalid username!" });
    }

    const user = await prisma.users.create({
      data: { username, password, email },
    });

    delete user.password;

    const token = jwt.sign(user, JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    res.send(user);
  } catch (error) {
    next(error);
  }
});

//Login a user
usersRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      // Send error status
      res.send({
        message: "No user by that name exists!",
        error: "Invalid username!",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      delete user.password;

      res.send(user);
    }
  } catch (error) {
    next(error);
  }
});

//Log out a user
usersRouter.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
