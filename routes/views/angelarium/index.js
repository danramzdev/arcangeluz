const express = require('express');

module.exports = app => {
  const router = express.Router();

  app.use("/angelarium", router);

  router.get("/", (req, res) => {
    res.render("angelarium/index");
  });
};
