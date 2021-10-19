'use strict';
var connection = require('../../config/dbconfig');

//Creación del objeto de la tabla unidad

var Usuario = function(usuario){
    this.id = usuario.id;
    this.nombre = usuario.nombre;
    this.apellido = usuario.apellido;
    this.correo = usuario.correo;
    this.username = usuario.username;
    this.direccion = usuario.direccion;
    this.telefono = usuario.telefono;
    this.contrasena = usuario.contrasena;
    this.id_farmacia = usuario.id_farmacia;
}

//Crear la función 'Insertar Unidad'

Usuario.create = function(usuario, result){
    connection.query("INSERT INTO usuarios set ?", usuario, function(err, res){
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

Usuario.findById = function (id, result){
    connection.query("Select * from usuarios where id = ? ", id, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
    });
}

Usuario.findAll = function (result) {
    connection.query("Select * from usuarios", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('usuarios : ', res);
      result(null, res);
    }
    });
    };

Usuario.update = function(id, usuario, result){
    connection.query("UPDATE usuarios SET direccion=?,telefono=?,contrasena=? WHERE id = ?", [usuario.direccion, usuario.telefono, usuario.contrasena, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

Usuario.delete = function(id, result){
connection.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
  }
  else{
    result(null, res);
  }
});
};
    
module.exports= Usuario;