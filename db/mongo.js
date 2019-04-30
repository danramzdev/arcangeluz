const MongoClient = require("mongodb").MongoClient;

const {
  config: { dbHost, dbPort, dbName }
} = require("../config");

const mongoURL = `mongodb://${dbHost}:${dbPort}`;

module.exports = (() => {
  let instance = null,
    disconnecting = false;

  function connect() {
    return new Promise((res, rej) => {
      MongoClient.connect(
        mongoURL,
        { useNewUrlParser: true },
        (err, client) => {
          if (err) rej(err);
          console.log("Conectado a la base de datos satisfactoriamente");
          instance = client;
          res(client.db(dbName));
        }
      );
    });
  }

  function disconnect() {
    return new Promise((res, rej) => {
      if (instance && !disconnecting) {
        disconnecting = true;
        console.log("Desconectando instancia de Mongo");
        instance.close(err => {
          if (err) {
            rej(err);
            disconnecting = false;
            return;
          }
          console.log("Instancia de Mongo desconectada!");
          res();
        });
      }
    });
  }

  return { connect, disconnect, instance: () => instance };
})();

// class Mongo {
//   constructor() {
//     this.instance = null;
//     this.disconnecting = false;
//   }
//
//   connect() {
//     return new Promise((res, rej) => {
//       MongoClient.connect(
//         mongoURL,
//         { useNewUrlParser: true },
//         (err, client) => {
//           if (err) rej(err);
//           console.log("Conectado a la base de datos satisfactoriamente");
//           this.instance = client;
//           res(client.db(dbName));
//         }
//       );
//     });
//   }
//
//   disconnect() {
//     return new Promise((res, rej) => {
//       if (this.instance && !this.disconnecting) {
//         this.disconnecting = true;
//         console.log("Desconectando instancia de Mongo");
//         this.instance.close(err => {
//           if (err) {
//             rej(err);
//             this.disconnecting = false;
//             return;
//           }
//           console.log('Instancia de Mongo desconectada!');
//           res();
//         });
//       }
//     });
//   }
// }
//
// module.exports = Mongo;
