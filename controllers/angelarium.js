const AngelService = require("../services/angeles");
const ArcangelService = require("../services/arcangeles");
const angelId = require("../utils/helpers/angelId");
const archangelesId = require("../utils/helpers/archangelesId");
const cacheResponse = require("../utils/cacheResponse");

const angelService = new AngelService();
const arcangelService = new ArcangelService();

class AngelariumController {
  static index(req, res) {
    cacheResponse(res);
    res.render("angelarium/index");
  }

  static result(req, res) {
    const { day, month, cumple } = req.body;

    res.redirect(
      `/calendario/angeles?angel=${angelId(day, month)}&arcangel=${archangelesId(
        cumple
      )}`
    );
  }

  static async getAngels(req, res, next) {
    try {
      cacheResponse(res);
      const { angel, arcangel } = req.query;
      let angelData, arcangelData;

      angelData = await angelService.getAngelById(angel);
      arcangelData = await arcangelService.getArcangelById(arcangel);

      res.render("angelarium/angeles", {
        angel: angelData,
        arcangel: arcangelData
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AngelariumController;
