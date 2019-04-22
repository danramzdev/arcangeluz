const express = require('express');

module.exports = (app, controller) => {
  const router = express.Router();

  app.use("/sonos", router);

  router.get("/", controller.index);
};
