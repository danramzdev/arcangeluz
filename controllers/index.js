const cacheResponse = require("../utils/cache-response");

class IndexController {
  static index(req, res) {
    cacheResponse(res);
    res.render("index");
  }
}

module.exports = IndexController;