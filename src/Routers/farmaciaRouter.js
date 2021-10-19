const express = require('express')
const router = express.Router()
const farmaciaController =   require('../Controllers/farmaciaController');
// Retrieve all employees
router.get('/', farmaciaController.findAll);
// Create a new employee
router.post('/', farmaciaController.create);
// Retrieve a single employee with id
router.get('/:id', farmaciaController.findById);
// Update a employee with id
router.put('/:id', farmaciaController.update);
// Delete a employee with id
router.delete('/:id', farmaciaController.delete);
module.exports = router