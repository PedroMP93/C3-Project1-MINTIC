'use strict';
var connection = require('../../config/dbconfig');

//Creación del objeto de la tabla unidad

var Sede = function(sede){
    this.id = sede.id;
    this.nombre = sede.nombre;
    this.direccion = sede.direccion;
    this.ciudad = sede.ciudad;
    this.municipio = sede.municipio;
    this.telefono = sede.telefono;
    this.id_farmacia = sede.id_farmacia;
}

//Crear la función 'Insertar Unidad'

Sede.create = function(sede, result){
    connection.query("INSERT INTO sede set ?", sede, function(err, res){
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

Sede.findById = function (id, result){
    connection.query("Select * from sede where id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
    });
}

Sede.findAll = function (result) {
    connection.query("Select * from sede", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('sedes: ', res);
      result(null, res);
    }
    });
    };

Sede.update = function(id, sede, result){
    connection.query("UPDATE sede SET direccion=?,telefono=? WHERE id = ?", [sede.direccion, sede.telefono, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

Sede.delete = function(id, result){
connection.query("DELETE FROM sede WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
  }
  else{
    result(null, res);
  }
});
};
    
module.exports= Sede;