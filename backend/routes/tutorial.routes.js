// Defining endpoints for actions related to tutorials;
import { Router } from "express";
import {
  getAllTutorials,
  getFrontendTutorials,
  getBackendTutorials,
  getAPITutorials,
  getUIUXTutorials,
  getTutorialById,
  createTutorial,
  updateTutorial,
  deleteTutorial,
} from "../controllers/tutorials.controller.js";
// import { authorize } from "../middlewares/auth.middleware.js";
// import { checkRole } from "../middlewares/roles.middleware.js";

const tutorialRouter = Router();

tutorialRouter.get("/", getAllTutorials); // get all tutorials;
tutorialRouter.get("/categories/frontend", getFrontendTutorials); // get frontend tutorials;
tutorialRouter.get("/categories/backend", getBackendTutorials); // get backend tutorials;
tutorialRouter.get("/categories/apis", getAPITutorials); // get API tutorials;
tutorialRouter.get("/categories/uiux", getUIUXTutorials); // get UIUX tutorials;
tutorialRouter.get("/:tutorialId", getTutorialById); // get a specific tutorial by id;

tutorialRouter.post("/", /* authorize, checkRole, */ createTutorial); // create a tutorial;

tutorialRouter.patch(
  "/:tutorialId",
  /* authorize, checkRole, */ updateTutorial
); // update a tutorial;

tutorialRouter.delete(
  "/:tutorialId",
  /* authorize, checkRole, */ deleteTutorial
); // delete a tutorial;

export default tutorialRouter;
