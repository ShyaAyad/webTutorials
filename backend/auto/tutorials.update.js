// I made this one only to automatically update all the image links I've accidentally inserted wrong into the db TT;
import fs from "fs";
import { JWT_SECRET } from "../config/env.js";

const updateTutorials = async () => {
  // read tutorial.json we need the correct image links;
  const rawTutorials = fs.readFileSync("../../tutorial.json", "utf-8");

  // parse it to json;
  const tutorials = JSON.parse(rawTutorials).tutorials;

  try {
    // get all the tutorials stored in the db we need their IDs;
    const res = await fetch("http://localhost:8010/api/v1/tutorials/");
    let tutorialsFromDB = await res.json();
    tutorialsFromDB = tutorialsFromDB.data.tutorials;

    // We have access to their IDs and the correct data from tutorial.json, we update;
    for (let index = 0; index < tutorialsFromDB.length; index++) {
      const image = tutorials[index].image;
      const tutorial = tutorialsFromDB[index]._id;

      await fetch(`http://localhost:8010/api/v1/tutorials/${tutorial}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JWT_SECRET}`,
        },
        method: "PATCH",
        body: JSON.stringify({
          image,
        }),
      });
    }
  } catch (error) {
    console.error("Something went wrong: " + error.message);
  } finally {
    console.log("Updated successfully!");
  }
};

updateTutorials();
