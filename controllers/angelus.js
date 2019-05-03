const cacheResponse = require("../utils/cache-response");

class AngelusController {
  static index(req, res) {
    cacheResponse(res);
    res.render("angelus");
  }
}

module.exports = AngelusController;
