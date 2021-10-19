'use strict';
var connection = require('../../config/dbconfig');

//Creación del objeto de la tabla unidad

var Categoria = function(categoria){
    this.id = categoria.id;
    this.nombre = categoria.nombre;
}

//Crear la función 'Insertar Unidad'

Categoria.create = function(categoria, result){
    connection.query("INSERT INTO categoria set ?", categoria, function(err, res){
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

Categoria.findById = function (id, result){
    connection.query("Select * from categoria where id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
    });
}

Categoria.findAll = function (result) {
    connection.query("Select * from categoria", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('categorias: ', res);
      result(null, res);
    }
    });
    };

Categoria.update = function(id, categoria, result){
    connection.query("UPDATE categoria SET nombre=? WHERE id = ?", [categoria.nombre, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

Categoria.delete = function(id, result){
connection.query("DELETE FROM categoria WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
  }
  else{
    result(null, res);
  }
});
};
    
module.exports= Categoria;