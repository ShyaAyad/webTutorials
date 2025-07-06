/* 
Automating tutorials' data entry;

run separately by:
    1. cd into backend/auto
    2. run the file "node tutorials.entry.js";
*/

import fs from "fs";

const createAllTutorials = async () => {
  // Read the tutorial.json file;
  const tutorialsFromFile = fs.readFileSync("../../tutorial.json", "utf-8");

  // Convert it to a json object and get the tutorials array;
  const tutorials = JSON.parse(tutorialsFromFile).tutorials;

  // Send a POST request with each tutorial's details to create it.
  try {
    for (let tutorial of tutorials) {
      await fetch("http://localhost:8010/api/v1/tutorials", {
        headers: {
          "Content-Type": "application/json",
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
    }

    console.log("Transfered all tutorials to the database!");
  } catch (error) {
    console.error("Error while transfering tutorials: " + error.message);
  }
};

createAllTutorials();
