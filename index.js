// External libraries
const express = require("express");

// Internal libraries
const path = require("path");

// Project requires
const {
  config: { port }
} = require("./config");

// Controllers requires
const indexController = require("./controllers");
const angelariumController = require("./controllers/angelarium");
const angelusController = require("./controllers/angelus");
const sonosController = require("./controllers/sonos");

// Express init
const app = express();

// Middleware parsing
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Template Engine Set
app.set("views", "./views");
app.set("view engine", "pug");

// Static files
app.use("/static", express.static(path.join(__dirname, "public")));

// Routes
require("./routes")(app, indexController);
require("./routes/sonos")(app, sonosController);
require("./routes/angelus")(app, angelusController);
require("./routes/angelarium")(app, angelariumController);

// Server init
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
