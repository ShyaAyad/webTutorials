// I made this one only to automatically update all the image links I've accidentally inserted wrong into the db TT;
import fs from "fs";

const updateTutorials = async () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODY5MjhkMjE5NWIyZWQ3YWQ0MmRjNGQiLCJpYXQiOjE3NTE3NDMxMDgsImV4cCI6MTc1MTgyOTUwOH0.w2iCns7EqsBPRc6fFRIpd-olQTRMjpc6o401SmIah00";

  // read tutorial.json we need the correct image links;
  const tutorialsFromFile = fs.readFileSync("../../tutorial.json", "utf-8");

  // parse it to json;
  const tutorials = JSON.parse(tutorialsFromFile).tutorials;

  try {
    // get all the tutorials stored in the db we need their IDs;
    const res = await fetch("http://localhost:8010/api/v1/tutorials/");
    let tutorialsFromDB = await res.json();
    tutorialsFromDB = tutorialsFromDB.data.tutorials;

    // We have access to their IDs and the correct data from tutorial.json, we update;
    for (let index = 0; index < tutorialsFromDB.length; index++) {
      const tutorial = tutorialsFromDB[index]._id;

      // find which tutorial are we updating;
      const match = tutorials.find(
        (tutorial) => tutorial.title === tutorialsFromDB[index].title
      );

      await fetch(`http://localhost:8010/api/v1/tutorials/${tutorial}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "PATCH",
        body: JSON.stringify({
          image: match.image,
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
