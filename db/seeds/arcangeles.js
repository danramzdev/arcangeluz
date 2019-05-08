const mongo = require("../mongo");
const arcangelesMock = require("../../utils/mocks/arcangeles");
const argv = require("yargs").argv;
const chalk = require("chalk");

if (argv.fill) {
  mongo.connect().then(db => {
    db.collection("arcangeles").insertMany(arcangelesMock, err => {
      if (err) throw err;
      console.log(chalk.green("Datos insertados satisfactoriamente"));
      mongo.disconnect();
    });
  });
}

if (argv.clear) {
  mongo.connect().then(db => {
    db.collection("arcangeles").drop(err => {
      if (err) throw err;
      console.log(chalk.yellow("Datos eliminados satisfactoriamente"));
      mongo.disconnect();
    });
  });
}
