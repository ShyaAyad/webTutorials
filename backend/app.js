import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import { connectToDb } from "./database/connect.database.js";
import authRouter from "./routes/auth.routes.js";
import tutorialRouter from "./routes/tutorial.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// built-in || third-party middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
); // allowing the frontend to access the APIs;

// routes;
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tutorials", tutorialRouter);

// global middlewares;
app.use(errorHandler);

// start the server;
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);

  await connectToDb();
});
