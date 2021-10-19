'use strict';
const Categoria = require('../Models/categoriaModel');
exports.findAll = function(req, res) {
Categoria.findAll(function(err, categoria) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', categoria);
  res.send(categoria);
});
};

exports.create = function(req, res) {
const new_categoria = new Categoria(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Categoria.create(new_categoria, function(err, categoria) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Categoria added successfully!",data:categoria});
});
}
};

exports.findById = function(req, res) {
Categoria.findById(req.params.id, function(err, categoria) {
  if (err)
  res.send(err);
  res.json(categoria);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Categoria.update(req.params.id, new Categoria(req.body), function(err, categoria) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Categoria successfully updated' });
});
}
};

exports.delete = function(req, res) {
Categoria.delete( req.params.id, function(err, categoria) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Categoria successfully deleted' });
});
};