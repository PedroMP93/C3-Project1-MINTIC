'use strict';
var connection = require('../../config/dbconfig');

//Creación del objeto de la tabla unidad

var Farmacia = function(farmacia){
    this.id = farmacia.id;
    this.nit = farmacia.nit;
}

//Crear la función 'Insertar Unidad'

Farmacia.create = function(farmacia, result){
    connection.query("INSERT INTO farmacia set ?", farmacia, function(err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

//Llamar el metodo de consultar en la tabla unidad

Farmacia.findById = function (id, result){
    connection.query("Select * from farmacia where id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
    });
}

Farmacia.findAll = function (result) {
    connection.query("Select * from farmacia", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('farmacias: ', res);
      result(null, res);
    }
    });
    };

Farmacia.update = function(id, farmacia, result){
    connection.query("UPDATE farmacia SET nit=? WHERE id = ?", [farmacia.nit, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

Farmacia.delete = function(id, result){
connection.query("DELETE FROM farmacia WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
  }
  else{
    result(null, res);
  }
});
};
    
module.exports= Farmacia;