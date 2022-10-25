const express = require('express');

const { getAllTasks, getOneTask, createTask, updateTask, deleteTask, editTask } = require('../controllers/tasks');


const router = express.Router();

// get all tasks
router.get('/', getAllTasks);

// get 1 task
router.get('/:id', getOneTask);

// add task
router.post('/', createTask);

// update task
router.put('/:id', updateTask);
router.patch('/:id', editTask);

// delete task
router.delete('/:id', deleteTask);

module.exports = router;