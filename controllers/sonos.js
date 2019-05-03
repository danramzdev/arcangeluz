const cacheResponse = require("../utils/cache-response");

class SonosController {
  static index(req, res) {
    cacheResponse(res);
    res.render("sonos");
  }
}

module.exports = SonosController;