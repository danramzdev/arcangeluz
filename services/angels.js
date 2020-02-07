const Mongo = require("../db/mongo");

class AngelsService {
  constructor() {
    this.mongoDB = new Mongo();
    this.collection = "angels";
  }

  async getAngelById(id) {
    const db = await this.mongoDB.connect();
    return await db.collection(this.collection).findOne({ id: id });
  }
}

module.exports = AngelsService;
