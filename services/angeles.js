const Mongo = require("../db/mongo");

class AngelService {
  constructor() {
    this.mongoDB = new Mongo();
    this.collection = "angeles";
  }

  async getAngelById(id) {
    const db = await this.mongoDB.connect();
    return await db.collection(this.collection).findOne({ id: id });
  }
}

module.exports = AngelService;
