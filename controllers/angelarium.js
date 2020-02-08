const AngelsService = require("../services/angels");
const ArchangelsService = require("../services/archangels");
const angelsId = require("../utils/helpers/angelsId");
const archangelsId = require("../utils/helpers/archangelsId");
const cacheResponse = require("../utils/cacheResponse");

const angelsService = new AngelsService();
const archangelsService = new ArchangelsService();

class AngelariumController {
  static index(req, res) {
    cacheResponse(res);
    res.render("angelarium/index");
  }

  static async getAngels(req, res, next) {
    const { day, month, birth } = req.body;

    const angelId = angelsId(day, month);
    const archangelId = archangelsId(birth);

    try {
      cacheResponse(res);
      const angel = await angelsService.getAngelById(angelId);
      const arcangel = await archangelsService.getArchangelById(archangelId);

      res.render("angelarium/angeles", {
        angel,
        arcangel
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AngelariumController;
