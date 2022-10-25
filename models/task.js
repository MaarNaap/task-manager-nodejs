const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 200
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;