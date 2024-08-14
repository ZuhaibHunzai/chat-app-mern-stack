const authRouter = require("express").Router();
const meController = require("../controllers/auth/me");
const registerController = require("../controllers/auth/signup");
const loginController = require("../controllers/auth/login");
const useAuth = require("../middleware/useAuth");

authRouter
  .get("/me", useAuth, meController)
  .post("/register", registerController)
  .post("/login", loginController);

module.exports = authRouter;
