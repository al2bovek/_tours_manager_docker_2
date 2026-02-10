import express from "express";
import {
  getAllUsers,
  postNewUser,
  getUserByID,
  updateUser,
} from "../controllers/usersController.js";

const usersRouter = express.Router();
usersRouter.route("/").get(getAllUsers).post(postNewUser);
usersRouter.route("/:id").get(getUserByID).patch(updateUser);

export default usersRouter;
