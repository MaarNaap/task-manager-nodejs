const Task = require('../models/task');
const tryAndCatch = require('../middleware/tryAndCatch');
const {createCustomError} = require('../errors/customError');

const getAllTasks = tryAndCatch(async (req, res) => {
        const tasks = await Task.find().sort('completed');
        res.json(tasks);
});

const getOneTask = tryAndCatch(async (req, res, next) => {
        const task = await Task.findById(req.params.id);
        // if (!task) return res.status(404).send('Invalid task id');
        if (!task) return next(createCustomError('Error:: Resource Not Found.', 404));
        res.send(task);
});

const createTask = tryAndCatch(async (req, res) => {
    // Task.create(req.body);
        const task = new Task(req.body);
        const result = await task.save();
        res.status(201).send(result);
});


const updateTask = tryAndCatch(async (req, res) => {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) return res.status(404).send('Invalid task id');
        res.send(task);
});

const editTask = tryAndCatch(async (req, res) => {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) return res.status(404).send('Invalid task id');
        res.send(task);
});


const deleteTask = tryAndCatch(async (req, res) => {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).send('Invalid task id');
        res.send(task);
});


module.exports = {
    getAllTasks, getOneTask, createTask, updateTask, deleteTask, editTask
};