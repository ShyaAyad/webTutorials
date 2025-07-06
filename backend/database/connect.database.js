// connecting to the database;
import mongoose from "mongoose";
import { DB_CONNECTION_STRING } from "../config/env.js";

// connect;
export const connectToDb = async () => {
  mongoose
    .connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database!");
    })
    .catch((err) => {
      console.log("Something went wrong: " + err.message);
    });
};
