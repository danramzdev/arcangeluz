const AngelsService = require("../../services/angels");
const ArchangelsService = require("../../services/archangels");
const angelsId = require("../../utils/helpers/angelsId");
const archangelsId = require("../../utils/helpers/archangelsId");
const cacheResponse = require("../../utils/cacheResponse");

const angelsService = new AngelsService();
const archangelsService = new ArchangelsService();

class CalendarController {
  static async getAngelAndArchangel(req, res, next) {
    cacheResponse(res);
    const { day, month, birth } = req.body;

    try {
      const angelId = angelsId(day, month);
      const archangelId = archangelsId(birth);

      const angel = await angelsService.getAngelById(angelId);
      const archangel = await archangelsService.getArchangelById(archangelId);

      if (!angel || !archangel) {
        return res.status(400).json({ error: "bad request" });
      }

      res.status(200).json({
        data: {
          angel,
          archangel
        },
        message: "Successful request"
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = CalendarController;
