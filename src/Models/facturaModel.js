'use strict';
var connection = require('../../config/dbconfig');

//Creación del objeto de la tabla unidad

var Factura = function(factura){
    this.id = factura.id;
    this.id_cliente = factura.id_cliente;
    this.total = factura.total;
    this.id_sede = factura.id_sede;
}

//Crear la función 'Insertar Unidad'

Factura.create = function(factura, result){
    connection.query("INSERT INTO factura set ?", factura, function(err, res){
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

Factura.findById = function (id, result){
    connection.query("Select * from factura where id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
    });
}

Factura.findAll = function (result) {
    connection.query("Select * from factura", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('facturas: ', res);
      result(null, res);
    }
    });
    };

Factura.update = function(id, factura, result){
    connection.query("UPDATE factura SET total=? WHERE id = ?", [factura.total, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

Factura.delete = function(id, result){
connection.query("DELETE FROM factura WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
  }
  else{
    result(null, res);
  }
});
};
    
module.exports= Factura;