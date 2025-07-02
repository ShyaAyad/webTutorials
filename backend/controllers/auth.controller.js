import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (request, response, next) => {
  try {
    // get user's data from the request object;
    const { fullName, email, password } = request.body;

    // try fetching a user with the provided email;
    const existingUser = await User.findOne({ email });

    // check if a user with that email already exists;
    if (existingUser) {
      throw new Error("User with that email already exists!");
    }

    // if not, hash password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // then create user;
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    // create token;
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    response.status(201).json({
      success: true,
      message: "Signed up Successfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (request, response, next) => {
  // when signing in credentials must be valid;
  try {
    // get the user's email and password from the request
    const { email, password } = request.body;

    // fetch the user with that email;
    const user = await User.findOne({ email });

    // check if user with that email exists;
    if (!user) {
      throw new Error("User with that email doesn't exist!");
    }

    // if it exists, check if the password is valid;
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Password is incorrect!");
    }

    // create token;
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    response.status(201).json({
      success: true,
      message: "Signed in successfully!",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};
