// External libraries
const express = require("express");
const path = require('path');

// Project requires
const {
  config: { port }
} = require("./config");

// Express init
const app = express();

// Template Engine Set
app.set("views", "./views");
app.set("view engine", "pug");

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// Routes
require("./routes/views")(app);
require("./routes/views/sonos")(app);
require("./routes/views/angelus")(app);
require("./routes/views/angelarium")(app);

// Server init
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
