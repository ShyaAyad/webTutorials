// Users 'table';
import mongoose from "mongoose";

// create the schema (Structure of the table);
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

// create the model out of the schema;
const User = mongoose.model("user", userSchema);

// export;
export default User;
