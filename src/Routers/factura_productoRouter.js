const express = require('express')
const router = express.Router()
const factura_productoController =   require('../Controllers/factura_productoController');
// Retrieve all employees
router.get('/', factura_productoController.findAll);
// Create a new employee
router.post('/', factura_productoController.create);
// Retrieve a single employee with id
router.get('/:id', factura_productoController.findById);
// Update a employee with id
router.put('/:id', factura_productoController.update);
// Delete a employee with id
router.delete('/:id', factura_productoController.delete);
module.exports = router