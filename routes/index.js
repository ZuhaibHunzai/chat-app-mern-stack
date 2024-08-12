const indexRouter = require("express").Router();

// auth routes
indexRouter.use("/auth", require("./auth"));

module.exports = indexRouter;
