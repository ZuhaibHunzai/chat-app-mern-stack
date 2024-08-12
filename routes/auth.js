const authRouter = require("express").Router();
const registerController = require("../controllers/auth/signup");
const loginController = require("../controllers/auth/login");

authRouter
  .post("/register", registerController)
  .post("/login", loginController);

module.exports = authRouter;
