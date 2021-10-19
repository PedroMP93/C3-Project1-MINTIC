'use strict';
const Factura_producto = require('../Models/factura_productoModel');
exports.findAll = function(req, res) {
Factura_producto.findAll(function(err, factura_producto) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', factura_producto);
  res.send(factura_producto);
});
};

exports.create = function(req, res) {
const new_factura_producto = new Factura_producto(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Factura_producto.create(new_factura_producto, function(err, factura_producto) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Factura_producto added successfully!",data:factura_producto});
});
}
};

exports.findById = function(req, res) {
Factura_producto.findById(req.params.id, function(err, factura_producto) {
  if (err)
  res.send(err);
  res.json(factura_producto);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Factura_producto.update(req.params.id, new Factura_producto(req.body), function(err, factura_producto) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Factura_producto successfully updated' });
});
}
};

exports.delete = function(req, res) {
Factura_producto.delete( req.params.id, function(err, factura_producto) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Factura_producto successfully deleted' });
});
};