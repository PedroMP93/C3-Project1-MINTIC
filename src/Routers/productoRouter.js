const express = require('express')
const router = express.Router()
const productoController =   require('../Controllers/productoController');
// Retrieve all employees
router.get('/', productoController.findAll);
// Create a new employee
router.post('/', productoController.create);
// Retrieve a single employee with id
router.get('/:id', productoController.findById);
// Update a employee with id
router.put('/:id', productoController.update);
// Delete a employee with id
router.delete('/:id', productoController.delete);
module.exports = router