const MongoClient = require("mongodb").MongoClient;

const {
  config: { dev, dbHost, dbPort, dbName, dbUser, dbPass }
} = require("../config");

const USER = encodeURIComponent(dbUser);
const PASS = encodeURIComponent(dbPass);

const mongoURL = dev
  ? `mongodb://${dbHost}:${dbPort}/${dbName}`
  : `mongodb://${USER}:${PASS}@${dbHost}:${dbPort}/${dbName}`;

class Mongo {
  constructor() {
    this.client = new MongoClient(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    this.dbName = dbName;
  }

  connect() {
    if (!Mongo.connection) {
      return new Promise((res, rej) => {
        Mongo.connection = this.client.connect(err => {
          if (err) {
            rej(err);
          }

          res(this.client.db(this.dbName));
        });
      });
    }

    return Mongo.connection;
  }
}

module.exports = Mongo;
