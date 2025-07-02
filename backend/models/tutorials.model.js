import mongoose from "mongoose";

// define structure (metadata) for tutorials table;
const tutorialSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["Frontend", "Backend", "APIs", "UIUX"],
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      required: false,
      maxLength: 500,
    },
    docLink: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return /^https?:\/\/.+$/.test(value); // checking if it's a valid URL (starts with https);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    image: {
      type: String,
      trim: true,
      required: false,
      validate: {
        validator: function (value) {
          return /^https?:\/\/.+$/.test(value); // checking if it's a valid URL (starts with https);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    video: {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: function (value) {
          return /^https?:\/\/.+$/.test(value); // checking if it's a valid URL (starts with https);
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  },
  { timestamps: true }
);

// create the model;
const Tutorial = mongoose.model("tutorial", tutorialSchema);

// export;
export default Tutorial;
