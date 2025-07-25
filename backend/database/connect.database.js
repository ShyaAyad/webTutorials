// connecting to the database;
import mongoose from "mongoose";
import { DB_CONNECTION_STRING } from "../config/env.js";

// connect;
export const connectToDb = () => {
  mongoose
    .connect(DB_CONNECTION_STRING)
    .then(() => {
      console.log("Successfully connected to the database!");
    })
    .catch((err) => {
      console.log("Something went wrong: " + err.message);
    });
};
