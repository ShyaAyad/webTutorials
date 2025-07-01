// routes for authentication (sign up / sign in);
import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp); // api endpoint for signing up;
authRouter.post("/sign-in", signIn); // api endpoint for signing in;

// export router;
export default authRouter;