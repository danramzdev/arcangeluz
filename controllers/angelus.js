const cacheResponse = require("../utils/cacheResponse");

class AngelusController {
  static index(req, res) {
    cacheResponse(res);
    res.render("angelus");
  }
}

module.exports = AngelusController;
