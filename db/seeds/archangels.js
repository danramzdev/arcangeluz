// DEBUG=app:* node db/seeds/archangels.js --fill || --clear

const Mongo = require("../mongo");
const debug = require("debug")("app:db:seeds:archangels");
const argv = require("yargs").argv;
const chalk = require("chalk");
const archangelsMock = require("../../utils/mocks/archangels");

const mongo = new Mongo();
const collection = "archangels";

if (argv.fill) {
  mongo
    .connect()
    .then(db => {
      db.collection(collection).insertMany(archangelsMock, err => {
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
