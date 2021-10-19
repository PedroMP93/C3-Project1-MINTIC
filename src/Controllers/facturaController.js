'use strict';
const Factura = require('../Models/facturaModel');
exports.findAll = function(req, res) {
Factura.findAll(function(err, factura) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', factura);
  res.send(factura);
});
};

exports.create = function(req, res) {
const new_factura = new Factura(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Factura.create(new_factura, function(err, factura) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Factura added successfully!",data:factura});
});
}
};

exports.findById = function(req, res) {
Factura.findById(req.params.id, function(err, factura) {
  if (err)
  res.send(err);
  res.json(factura);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Factura.update(req.params.id, new Factura(req.body), function(err, factura) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Factura successfully updated' });
});
}
};

exports.delete = function(req, res) {
Factura.delete( req.params.id, function(err, factura) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Factura successfully deleted' });
});
};