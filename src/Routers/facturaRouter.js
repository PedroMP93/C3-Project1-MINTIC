const express = require('express')
const router = express.Router()
const facturaController =   require('../Controllers/facturaController');
// Retrieve all employees
router.get('/', facturaController.findAll);
// Create a new employee
router.post('/', facturaController.create);
// Retrieve a single employee with id
router.get('/:id', facturaController.findById);
// Update a employee with id
router.put('/:id', facturaController.update);
// Delete a employee with id
router.delete('/:id', facturaController.delete);
module.exports = router