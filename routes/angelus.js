const express = require('express');

module.exports = app => {
  const router = express.Router();

  app.use("/angelus", router);

  router.get("/", (req, res) => {
    res.render("angelus");
  });
};
