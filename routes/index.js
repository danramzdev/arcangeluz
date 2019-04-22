module.exports = (app, controller) => {
  app.get("/", controller.index);
};
