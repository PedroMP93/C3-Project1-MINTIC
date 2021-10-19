const express = require('express')
const router = express.Router()
const categoriaController =   require('../Controllers/categoriaController');
// Retrieve all employees
router.get('/', categoriaController.findAll);
// Create a new employee
router.post('/', categoriaController.create);
// Retrieve a single employee with id
router.get('/:id', categoriaController.findById);
// Update a employee with id
router.put('/:id', categoriaController.update);
// Delete a employee with id
router.delete('/:id', categoriaController.delete);
module.exports = router