const cacheResponse = require("../utils/cacheResponse");

class SonosController {
  static index(req, res) {
    cacheResponse(res);
    res.render("sonos");
  }
}

module.exports = SonosController;
