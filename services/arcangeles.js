const Mongo = require("../db/mongo");

class ArcangelService {
  constructor() {
    this.mongoDB = new Mongo();
    this.collection = "arcangeles";
  }

  async getArcangelById(id) {
    const db = await this.mongoDB.connect();
    return await db.collection(this.collection).findOne({ id: id });
  }
}

module.exports = ArcangelService;
