const express = require("express");
const angelariumController = require("../../../controllers/angelariumController");

module.exports = app => {
  const router = express.Router();

  app.use("/angelarium", router);

  router.get("/", angelariumController.index);
};
