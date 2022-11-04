const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", userController.get_all);
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.delete("/remove", userController.remove_user);

module.exports = userRouter;
