'use strict';
const Farmacia = require('../Models/farmaciaModel');
exports.findAll = function(req, res) {
Farmacia.findAll(function(err, farmacia) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', farmacia);
  res.send(farmacia);
});
};

exports.create = function(req, res) {
const new_farmacia = new Farmacia(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Farmacia.create(new_farmacia, function(err, farmacia) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Farmacia added successfully!",data:farmacia});
});
}
};

exports.findById = function(req, res) {
Farmacia.findById(req.params.id, function(err, farmacia) {
  if (err)
  res.send(err);
  res.json(farmacia);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Farmacia.update(req.params.id, new Farmacia(req.body), function(err, farmacia) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Farmacia successfully updated' });
});
}
};

exports.delete = function(req, res) {
Farmacia.delete( req.params.id, function(err, farmacia) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Farmacia successfully deleted' });
});
};