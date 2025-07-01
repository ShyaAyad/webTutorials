// connecting to the database;
import mongoose from "mongoose";
import { DB_CONNECTION_STRING } from "../config/env.js";

// connect;
export const connectToDb = async () => {
    await mongoose.connect(DB_CONNECTION_STRING);

    console.log("Successfully connected to the database!");
}