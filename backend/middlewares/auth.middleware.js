import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

// authorization;
// here we check if the request has a token and make sure it's valid before allowing access;

// typically this is what a request object sent from the client for sign up looks like;
/* 
request: {
    headers: { 
        host: "localhost:3000", 
        connection: "keep-alive", 
        Content-Type: "application/json",
        authorization: "Bearer [token]", // this is what we need here;
    },
    body: {
        fullName: "rasyar safin",
        email: "rasyar@gmail.com",
        password: "rasyar123",
    },
    params: {}, 
    query: {},
    method: "POST",
    url: "/api/v1/auth/sign-up"
}
*/

export const authorize = async (request, response, next) => {
  try {
    let token;

    // check if a token is provided in the request; if so, save it;
    if (
      request.headers.authorization &&
      request.headers.authorization.startsWith("Bearer")
    ) {
      token = request.headers.authorization.split(" ")[1];
    }

    // if a token is not provided throw error;
    if (!token) {
      throw new Error("Unauthorized");
    }

    // check if the token provided is correct;
    const verifiedUser = jwt.verify(token, JWT_SECRET);

    // find the user whom this token belongs to;
    const user = await User.findById(verifiedUser.userId);

    // attach the user's data to the request object so other routes can use it
    request.user = user;

    // call next to move on;
    next();
  } catch (error) {
    next(error);
  }
};
