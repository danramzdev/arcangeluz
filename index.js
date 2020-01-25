// External libraries
const express = require("express");
const boom = require("@hapi/boom");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

// Internal libraries
const path = require("path");

// Project requires
const isRequestAjaxOrApi = require("./utils/isRequestAjaxOrApi");
const {
  config: { port }
} = require("./config");
const {
  logErrors,
  wrapErrors,
  clientErrorHandler,
  errorHandler
} = require("./utils/middlewares/errorHandlers");

// Controllers requires
const indexController = require("./controllers");
const angelariumController = require("./controllers/angelarium");
const angelusController = require("./controllers/angelus");
const sonosController = require("./controllers/sonos");

// Express init
const app = express();

// Middleware
app.use(cookieParser());

// Middleware parsing
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Template Engine Set
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

// Static files
app.use("/static", express.static(path.join(__dirname, "public")));

// Helmet middleware
app.use(helmet());

// Routes
require("./routes")(app, indexController);
require("./routes/sonos")(app, sonosController);
require("./routes/angelus")(app, angelusController);
require("./routes/angelarium")(app, angelariumController);

// 404 error
app.use(function(req, res, next) {
  if (isRequestAjaxOrApi(req)) {
    const {
      output: { statusCode, payload }
    } = boom.notFound();

    res.status(statusCode).json(payload);
  }

  res.status(404).render("404");
});

// Error Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// Server init
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
