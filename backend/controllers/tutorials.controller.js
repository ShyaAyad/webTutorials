import Tutorial from "../models/tutorials.model.js";

export const getAllTutorials = async (request, response) => {
  try {
    // fetch all the tutorials regardless of the category;
    const tutorials = await Tutorial.find();

    // send back response;
    response.status(200).json({
      success: true,
      message: "Fetched all tutorials",
      result: tutorials.length,
      data: {
        tutorials,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFrontendTutorials = async (request, response) => {
  try {
    // fetch all the tutorials where category is frontend;
    const tutorials = await Tutorial.find({ category: "Frontend" });

    // send back response;
    response.status(200).json({
      success: true,
      message: "Fetched all frontend tutorials",
      data: {
        tutorials,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBackendTutorials = async (request, response) => {
  try {
    // fetch all the tutorials where category is backend;
    const tutorials = await Tutorial.find({ category: "Backend" });

    // send back response;
    response.status(200).json({
      success: true,
      message: "Fetched all backend tutorials",
      data: {
        tutorials,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAPITutorials = async (request, response) => {
  try {
    // fetch all the tutorials where category is api;
    const tutorials = await Tutorial.find({ category: "APIs" });

    // send back response;
    response.status(200).json({
      success: true,
      message: "Fetched all api tutorials",
      data: {
        tutorials,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUIUXTutorials = async (request, response) => {
  try {
    // fetch all the tutorials where category is uiux;
    const tutorials = await Tutorial.find({ category: "UIUX" });

    // send back response;
    response.status(200).json({
      success: true,
      message: "Fetched all uiux tutorials",
      data: {
        tutorials,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTutorialById = async (request, response) => {
  try {
    // get tutorial Id;
    const tutorialId = request.params.tutorialId;

    // fetch tutorial;
    const tutorial = await Tutorial.findById(tutorialId);

    // send back response;
    response.status(200).json({
      success: true,
      message: "Tutorial fetched successfully!",
      data: {
        tutorial,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const createTutorial = async (request, response) => {
  try {
    // get the details for the new tutorial from the request object;
    const tutorialDetails = request.body;

    // check if required data is not missing;
    if (
      !tutorialDetails.category ||
      !tutorialDetails.title ||
      !tutorialDetails.docLink ||
      !tutorialDetails.video
    ) {
      throw new Error("Required data is missing!");
    }

    // create tutorial;
    const newTutorial = await Tutorial.create(tutorialDetails);

    // send response back;
    response.status(201).json({
      success: true,
      message: "Tutorial created successfully!",
      data: {
        tutorial: newTutorial,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTutorial = async (request, response) => {
  try {
    // get the tutorial id from the request object;
    const tutorialId = request.params.tutorialId;

    // get the new tutorial details from the request object;
    const newTutorialDetails = request.body;

    // update;
    const tutorialAfterUpdate = await Tutorial.findByIdAndUpdate(
      tutorialId,
      newTutorialDetails
    );

    // send response back;
    response.status(200).json({
      success: true,
      message: "Tutorial updated successfully!",
      data: {
        tutorial: tutorialAfterUpdate,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTutorial = async (request, response) => {
  try {
    // get the tutorial id we're deleting from the request object;
    const tutorialId = request.params.tutorialId;

    // delete;
    await Tutorial.findByIdAndDelete(tutorialId);

    // inform the user that it's deleted through the response;
    response.status(204).json({
      success: true,
      message: "Tutorial deleted successfully!",
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
