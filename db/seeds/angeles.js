const Mongo = require("../mongo");
const angelesMock = require("../../utils/mocks/angeles");
const argv = require("yargs").argv;
const chalk = require("chalk");

const mongo = new Mongo();

if (argv.fill) {
  mongo.connect().then(db => {
    db.collection("angeles").insertMany(angelesMock, err => {
      if (err) throw err;
      console.log(chalk.green("Datos insertados satisfactoriamente"));
      mongo.disconnect();
    });
  });
}

if (argv.clear) {
  mongo.connect().then(db => {
    db.collection("angeles").drop(err => {
      if (err) throw err;
      console.log(chalk.yellow("Colección eliminada satisfactoriamente"));
      mongo.disconnect();
    });
  });
}
