import express from "express";
import { PORT } from "./config/env.js";
import { connectToDb } from "./database/connect.database.js";
import authRouter from "./routes/auth.routes.js";

const app = express(); // initialize app;

// built-in middlewares
app.use(express.json()); // parse requests; 

// routes;
app.use("/api/v1/auth", authRouter); // let the routes we defined in authRouter handle the requests from "/api/v1/auth";

// start the server;
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);

  // after the server started, connect to database;
  await connectToDb();
});
