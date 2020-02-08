const router = require("express").Router();

module.exports = (app, controller) => {
  app.use("/api/calendar", router);

  router.post("/", controller.getAngelAndArchangel);
};
