export const checkRole = async (requiredRole) => {
  return (request, response, next) => {
    if (request.user || request.user.role !== "Admin") {
      response.status(403).json({
        success: false,
        message: "Access denied. Not enough permission.",
      });
    }

    next();
  };
};
