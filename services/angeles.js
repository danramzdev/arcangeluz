const mongo = require("../db/mongo");
const {
  config: { dbName }
} = require("../config");

class AngelService {
  getAngelById(id) {
    const db = mongo.instance().db(dbName);
    return db.collection("angeles").findOne({ id: id });
  }
}

module.exports = AngelService;
