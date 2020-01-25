// DEBUG=app:* node db/seeds/angeles.js

const Mongo = require("../mongo");
const debug = require("debug")("app:db:seeds:arcangeles");
const argv = require("yargs").argv;
const chalk = require("chalk");
const arcangelesMock = require("../../utils/mocks/arcangeles");

const mongo = new Mongo();
const collection = "arcangeles";

if (argv.fill) {
  mongo
    .connect()
    .then(db => {
      db.collection(collection).insertMany(arcangelesMock, err => {
        if (err) throw err;
        debug(chalk.green("Datos insertados satisfactoriamente"));
        return process.exit(0);
      });
    })
    .catch(err => {
      throw err;
    });
}

if (argv.clear) {
  mongo.connect().then(db => {
    db.collection(collection).drop(err => {
      if (err) throw err;
      debug(chalk.yellow("Datos eliminados satisfactoriamente"));
      return process.exit(0);
    });
  });
}
