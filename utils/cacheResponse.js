const {
  config: { dev }
} = require("../config");

module.exports = function(res) {
  if (!dev) {
    res.set("Cache-Control", "public, max-age=300");
  }
};
