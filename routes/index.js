module.exports = (app, controller) => {
  app.get("/", controller.index);
  app.post("/", controller.subscribe);
};
