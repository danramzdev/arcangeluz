// DEBUG=app:* node db/seeds/angels.js --fill || --clear

const Mongo = require("../mongo");
const debug = require("debug")("app:db:seeds:angels");
const argv = require("yargs").argv;
const chalk = require("chalk");
const angelesMock = require("../../utils/mocks/angels");

const mongo = new Mongo();
const collection = "angels";

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
