// External libraries
const express = require("express");

// Internal libraries
const path = require("path");

// Project requires
const {
  config: { port }
} = require("./config");

// Controllers requires
const angelariumController = require("./controllers/angelarium");

// Express init
const app = express();

// Template Engine Set
app.set("views", "./views");
app.set("view engine", "pug");

// Static files
app.use("/static", express.static(path.join(__dirname, "public")));

// Routes
require("./routes")(app);
require("./routes/sonos")(app);
require("./routes/angelus")(app);
require("./routes/angelarium")(app, angelariumController);

// Server init
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
