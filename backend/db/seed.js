const prisma = require("./prisma");
const bcrypt = require("bcrypt");
const { stories } = require("./seedData");

const dropTables = async () => {
  await prisma.$executeRaw`DROP TABLE IF EXISTS stories;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS users;`;

  console.log("Tables Dropped.");
};

const createTables = async () => {
  console.log("Creating tables...");
  await prisma.$executeRaw`CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    description VARCHAR (255) NOT NULL,
    story_text VARCHAR (100000) NOT NULL,
    img_url VARCHAR (255) NOT NULL
  )
;`;

  await prisma.$executeRaw`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    is_admin BOOLEAN DEFAULT false
)`;

  console.log("Tables created.");
};

const seedDb = async () => {
  console.log("Creating admin...");
  let password = "admin";
  password = await bcrypt.hash(password, 10);
  const admin = await prisma.users.create({
    data: {
      username: "admin",
      password: password,
      email: "admin",
      is_admin: true,
    },
  });
  console.log(admin);

  console.log("Populating stories...");
  for (const story of stories) {
    const createdStory = await prisma.stories.create({ data: story });
    console.log(createdStory);
  }

  console.log("Database Seed Completed!");
};

const initDb = async () => {
  try {
    await dropTables();
    await createTables();
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
