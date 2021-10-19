const express = require('express')
const router = express.Router()
const usuarioController =   require('../Controllers/usuariosController');
// Retrieve all employees
router.get('/', usuarioController.findAll);
// Create a new employee
router.post('/', usuarioController.create);
// Retrieve a single employee with id
router.get('/:id', usuarioController.findById);
// Update a employee with id
router.put('/:id', usuarioController.update);
// Delete a employee with id
router.delete('/:id', usuarioController.delete);
module.exports = router