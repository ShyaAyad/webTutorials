import express from "express";
import { PORT } from "./config/env.js";
import { connectToDb } from "./database/connect.database.js";
import authRouter from "./routes/auth.routes.js";
import tutorialRouter from './routes/tutorial.routes.js';

const app = express(); // initialize app;

// built-in middlewares
app.use(express.json()); // parse requests; 
app.use(express.urlencoded({extended: false}));

// routes;
app.use("/api/v1/auth", authRouter); // authentication routes
app.use("/api/v1/tutorials", tutorialRouter); // tutorial routes;

// start the server;
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);

  // after the server started, connect to database;
  await connectToDb();
});
