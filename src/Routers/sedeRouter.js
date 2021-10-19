const express = require('express')
const router = express.Router()
const sedeController =   require('../Controllers/sedeController');
// Retrieve all employees
router.get('/', sedeController.findAll);
// Create a new employee
router.post('/', sedeController.create);
// Retrieve a single employee with id
router.get('/:id', sedeController.findById);
// Update a employee with id
router.put('/:id', sedeController.update);
// Delete a employee with id
router.delete('/:id', sedeController.delete);
module.exports = router