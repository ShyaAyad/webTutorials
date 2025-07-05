/* 
Automating tutorials' data entry;

run separately by:
    1. cd into backend/auto
    2. run the file "node tutorials.entry.js";
*/

import fs from "fs";

const createAllTutorials = () => {
  // The admin's token since only the admin can create tutorials;
  // There are surely better ways to get the token but this works for now TT;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODY5MjhkMjE5NWIyZWQ3YWQ0MmRjNGQiLCJpYXQiOjE3NTE3MjIyMTksImV4cCI6MTc1MTgwODYxOX0.LBTaK6n2pYX_BW62zX11tf95yW0Wti7oy4kUWpQCHTk";

  // Read the tutorial.json file;
  const rawTutorials = fs.readFileSync("../../tutorial.json", "utf-8");

  // Convert it to a json object and get the tutorials array;
  const tutorials = JSON.parse(rawTutorials).tutorials;

  // Send a POST request with each tutorial's details to create it.
  try {
    tutorials.forEach(async (tutorial) => {
      await fetch("http://localhost:8010/api/v1/tutorials", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          category: tutorial.category,
          title: tutorial.title,
          description: tutorial.description,
          docLink: tutorial.docLink,
          image: tutorial.image,
          video: tutorial.video,
        }),
      });
    });
  } catch (error) {
    console.error("Error while creating tutorials: " + error.message);
  } finally {
    console.log("Done!");
  }
};

createAllTutorials();
