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

  static result(req, res) {
    const { day, month, birth } = req.body;

    res.redirect(
      `/calendario/angeles?angel=${angelsId(day, month)}&arcangel=${archangelsId(
        birth
      )}`
    );
  }

  static async getAngels(req, res, next) {
    try {
      cacheResponse(res);
      const { angel, arcangel } = req.query;
      let angelData, arcangelData;

      angelData = await angelsService.getAngelById(angel);
      arcangelData = await archangelsService.getArchangelById(arcangel);

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
