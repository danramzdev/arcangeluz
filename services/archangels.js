const Mongo = require("../db/mongo");

class ArchangelsService {
  constructor() {
    this.mongoDB = new Mongo();
    this.collection = "archangels";
  }

  async getArchangelById(id) {
    const db = await this.mongoDB.connect();
    return await db.collection(this.collection).findOne({ id: id });
  }
}

module.exports = ArchangelsService;
