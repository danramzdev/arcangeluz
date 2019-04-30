const mongo = require("../db/mongo");
const {
  config: { dbName }
} = require("../config");

class ArcangelService {
  getArcangelById(id) {
    const db = mongo.instance().db(dbName);
    return db.collection("arcangeles").findOne({ id: id });
  }
}

module.exports = ArcangelService;
