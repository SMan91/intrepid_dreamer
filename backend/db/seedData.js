/*
  await prisma.$executeRaw`CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    description VARCHAR (255) NOT NULL,
    story_text VARCHAR (100000) NOT NULL
  )
;`;
*/
const stories = [
  {
    title: "Story 1",
    description: "Story 1",
    story_text: "This is story 1",
  },

  {
    title: "Story 2",
    description: "Story 2",
    story_text: "This is story 2",
  },
];

module.exports = { stories };
