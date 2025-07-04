// a global error handler to give us a better insight of the errors we face;
// I got it from JavaScript Mastery TT;

export const errorHandler = async (err, req, res, next) => {
  try {
    // we'll perform modifications on a temperory variable (error);
    let error = { ...err };

    error.message = err.message; // Why? I don't even know TT;

    // Happens when passing an invalid ID type;
    if (err.name === "CastError") {
      error = new Error("Resource not found!");
      error.statusCode = 404;
    }

    // Happens when we have a duplicate value for a unique field;
    if (err.code === 11000) {
      error = new Error("Duplicate filed value entered!");
      error.statusCode = 400;
    }

    // I have no idea how that one works :/;
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((values) => values.message);
      error = new Error(message.join(", "));
      error.statusCode = 400;
    }

    // send error back as a response;
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error!",
    });
  } catch (error) {
    next(error);
  }
};
