'use strict';
var fs = require("fs");
module.exports.obtener_juegos = function (req, res) {
fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
console.log(err);
console.log(data);
res.end(data);
});
};
module.exports.agregar_juego = function (req, res) {
fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
const array = JSON.parse(data);
console.log(err);
console.log(data);
const nuevo = req.body;
array.push(nuevo);
fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), 'utf8', function (err, data) {
console.log(err);
res.end(err);
});
res.end(JSON.stringify(array));
});
};

module.exports.obtener_juego = function (req, res) {
fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
const juegos = JSON.parse(data);
const juego = juegos[req.params.gameIndex]
console.log(juego);
res.end(JSON.stringify(juego));
});
};

module.exports.borrar_juego = function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
  
      const juegos = JSON.parse(data);
      const juegoIndex = req.params.gameIndex;

      const juegoEliminado = juegos.splice(juegoIndex, 1);
  
      fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(juegos), function (err) {
        if (err) {
          console.log(err);
          return res.status(500).send("Error al guardar los cambios en el archivo de juegos.");
        }
  
        console.log("Juego eliminado:", juegoEliminado);
        res.end(JSON.stringify('Se eliminó el juego.'));
      });
    });
  };

  module.exports.filtrar_juego_nombre= function (req, res) {
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) {
  
      const juegos = JSON.parse(data);
      const juegoIndex = req.body.gameKeyName;

      const juegos_filtrados = juegos.filter(juego => juego.nombre==juegoIndex || juego.nombre.includes(juegoIndex))

      res.end(JSON.stringify(juegos_filtrados));

    
    });
  };




