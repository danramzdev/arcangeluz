const express = require("express");

module.exports = (app, controller) => {
  const router = express.Router();

  app.use("/calendario", router);

  router.get("/", controller.index);
  router.post("/", controller.result);
  router.get("/angeles", controller.getAngels);
};
