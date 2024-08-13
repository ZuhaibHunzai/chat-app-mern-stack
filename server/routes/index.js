const indexRouter = require("express").Router();

// auth routes
indexRouter.use("/auth", require("./auth"));
// messages router
indexRouter.use("/chat", require("./chat"));

module.exports = indexRouter;
