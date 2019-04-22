const express = require('express');

module.exports = app => {
  const router = express.Router();

  app.use("/sonos", router);

  router.get("/", (req, res) => {
    res.render("sonos");
  });
};
