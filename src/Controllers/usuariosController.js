'use strict';
const Usuario = require('../Models/usuariosModel');
exports.findAll = function(req, res) {
Usuario.findAll(function(err, usuario) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', usuario);
  res.send(usuario);
});
};

exports.create = function(req, res) {
const new_usuario = new Usuario(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Usuario.create(new_usuario, function(err, usuario) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Usuario added successfully!",data:usuario});
});
}
};

exports.findById = function(req, res) {
Usuario.findById(req.params.id, function(err, usuario) {
  if (err)
  res.send(err);
  res.json(usuario);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Usuario.update(req.params.id, new Usuario(req.body), function(err, usuario) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Usuario successfully updated' });
});
}
};

exports.delete = function(req, res) {
Usuario.delete( req.params.id, function(err, usuario) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Usuario successfully deleted' });
});
};