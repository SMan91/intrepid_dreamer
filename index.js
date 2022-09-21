const express = require("express");
const server = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { COOKIE_SECRET } = process.env;
const { authRequired } = require(".backend/api/utils");

// enable cross-origin resource sharing to proxy api requests
// from localhost:3000 to localhost:4000 in local dev env
const cors = require("cors");
server.use(cors());

// create logs for everything
const morgan = require("morgan");
server.use(morgan("dev"));

// configure cookieParser middleware
server.use(cookieParser(COOKIE_SECRET));

// handle application/json requests
server.use(express.json());

// here's our static files
const path = require("path");
server.use(express.static(path.join(__dirname, "build")));

// here's our API
server.use("/api", require("./api"));

// by default serve up the react app if we don't recognize the route
server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.get("/test", authRequired, (req, res, next) => {
  res.send("You are authorized");
});

// bring in the DB connection
const { prisma } = require("./db");

// connect to the server
const PORT = process.env.PORT || 4000;

// define a server handle to close open tcp connection after unit tests have run
const handle = server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);

  try {
    await prisma.$connect();
    console.log("Database is open for business!");
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});

server.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status);
  }
  res.send({
    error: error.error,
    name: error.name,
    message: error.message,
  });
});

// export server and handle for routes/*.test.js
module.exports = { server, handle };
