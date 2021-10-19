'use strict';
var connection = require('../../config/dbconfig');

//Creación del objeto de la tabla unidad

var Producto = function(producto){
    this.id = producto.id;
    this.nombre = producto.nombre;
    this.cant_stock = producto.cant_stock;
    this.id_categoria = producto.id_categoria;
    this.username = producto.username;
    this.precio = producto.precio;
    this.fabricante = producto.fabricante;
    this.concentracion = producto.concentracion;
}

//Crear la función 'Insertar Unidad'

Producto.create = function(producto, result){
    connection.query("INSERT INTO producto set ?", producto, function(err, res){
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

Producto.findById = function (id, result){
    connection.query("Select * from producto where id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
    });
}

Producto.findAll = function (result) {
    connection.query("Select * from producto", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('productos: ', res);
      result(null, res);
    }
    });
    };

Producto.update = function(id, producto, result){
    connection.query("UPDATE producto SET precio=?,cant_stock=? WHERE id = ?", [producto.precio, producto.cant_stock, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

Producto.delete = function(id, result){
connection.query("DELETE FROM producto WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
  }
  else{
    result(null, res);
  }
});
};
    
module.exports= Producto;