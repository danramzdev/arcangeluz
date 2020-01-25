// DEBUG=app:* node db/seeds/angeles.js

const Mongo = require("../mongo");
const debug = require("debug")("app:db:seeds:angeles");
const argv = require("yargs").argv;
const chalk = require("chalk");
const angelesMock = require("../../utils/mocks/angeles");

const mongo = new Mongo();
const collection = "angeles";

if (argv.fill) {
  mongo.connect().then(db => {
    db.collection(collection).insertMany(angelesMock, err => {
      if (err) throw err;
      debug(chalk.green("Datos insertados satisfactoriamente"));
      return process.exit(0);
    });
  });
}

if (argv.clear) {
  mongo.connect().then(db => {
    db.collection(collection).drop(err => {
      if (err) throw err;
      debug(chalk.yellow("Colección eliminada satisfactoriamente"));
      return process.exit(0);
    });
  });
}
