'use strict';
const Sede = require('../Models/sedeModel');
exports.findAll = function(req, res) {
Sede.findAll(function(err, sede) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', sede);
  res.send(sede);
});
};

exports.create = function(req, res) {
const new_sede = new Sede(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Sede.create(new_sede, function(err, sede) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Sede added successfully!",data:sede});
});
}
};

exports.findById = function(req, res) {
Sede.findById(req.params.id, function(err, sede) {
  if (err)
  res.send(err);
  res.json(sede);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Sede.update(req.params.id, new Sede(req.body), function(err, sede) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Sede successfully updated' });
});
}
};

exports.delete = function(req, res) {
Sede.delete( req.params.id, function(err, sede) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Sede successfully deleted' });
});
};