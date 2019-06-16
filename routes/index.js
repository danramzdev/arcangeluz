const { csrfProtection } = require("../utils/csrfProtection");

module.exports = (app, controller) => {
  app.get("/", csrfProtection, controller.index);
  app.post("/", csrfProtection, controller.subscribe);
};
