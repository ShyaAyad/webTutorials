import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import {
  getAllUsers,
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/user", authorize, getUser);
userRouter.get("/:userId", getUserById);

userRouter.post("/", createUser);

userRouter.patch("/:userId", authorize, updateUser);

userRouter.delete("/:userId", authorize, deleteUser);

export default userRouter;
