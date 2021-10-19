'use strict';
var connection = require('../../config/dbconfig');

//Creación del objeto de la tabla unidad

var Factura_producto = function(factura_producto){
    this.id_producto = factura_producto.id_producto;
    this.id_factura = factura_producto.id_factura;
    this.cantidad = factura_producto.cantidad;
    this.total = factura_producto.total;
}

//Crear la función 'Insertar Unidad'

Factura_producto.create = function(factura_producto, result){
    connection.query("INSERT INTO factura_producto set ?", factura_producto, function(err, res){
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

Factura_producto.findById = function (id, result){
    connection.query("Select * from factura_producto where id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
    });
}

Factura_producto.findAll = function (result) {
    connection.query("Select * from factura_producto", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('factura_productos: ', res);
      result(null, res);
    }
    });
    };

Factura_producto.update = function(id, factura_producto, result){
    connection.query("UPDATE factura_producto SET id_producto=?,cantidad=?,total=? WHERE id = ?", [factura_producto.id_producto, factura_producto.cantidad, factura_producto.total, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

Factura_producto.delete = function(id, result){
connection.query("DELETE FROM factura_producto WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
  }
  else{
    result(null, res);
  }
});
};
    
module.exports= Factura_producto;