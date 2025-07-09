import User from "../models/users.model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (request, response) => {
  try {
    // get all the users;
    const users = await User.find();

    // send response back;
    response.status(200).json({
      success: true,
      message: "Fetched all users!",
      data: {
        users,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (request, response) => {
  try {
    // this handler is executed after the "authorize" handler;
    // and in authorize() handler we attach the user to the request object;
    // so atp we have access to 'user' property that has the user details;

    const user = request.user;

    response.status(200).json({
      success: true,
      message: "Fetched user!",
      data: {
        user,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserById = async (request, response) => {
  try {
    // get the users's id;
    const userId = request.params.userId;

    // find the user;
    const user = await User.findById(userId);

    // send response back;
    response.status(200).json({
      success: true,
      message: "Fetched user by Id!",
      data: {
        user,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const createUser = async (request, response) => {
  try {
    const userDetails = request.body;

    // check if required data is not missing;
    if (!userDetails.fullName || !userDetails.email || !userDetails.password) {
      throw new Error("Required data is missing!");
    }

    // hash password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userDetails.password, salt);

    const newUser = await User.create({
      ...userDetails,
      password: hashedPassword,
    });

    // send response back;
    response.status(201).json({
      success: true,
      message: "User created successfully!",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (request, response) => {
  try {
    // get the user's id we want to update;
    const userId = request.params.userId;

    // get the new user data;
    const newUserDetails = request.body;

    // hash password before updating it;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUserDetails.password, salt);

    // update;
    const userAfterUpdate = await User.findByIdAndUpdate(userId, {
      ...newUserDetails,
      password: hashedPassword,
    });

    // send response back;
    response.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: {
        user: userAfterUpdate,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (request, response) => {
  try {
    const userId = request.params.userId;

    await User.findByIdAndDelete(userId);

    response.status(204).json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
