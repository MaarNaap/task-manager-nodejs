const Task = require('./models/task');

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find().sort('completed');
        res.json(tasks);
    }
    catch (err) {
        console.log('Error db::', err);
        res.status(500).send('Error' + err);
    };
};



// function tryGetAllTasks(fn) {
//     return async function (req,res,next) {
//         try { fn(req, res, next) }
//         catch (err) { console.log('errrrrrr') };
//     };
// };

// function tryIt(req, res, next) {
//     console.lov('inside tryIt() now');
// };

// tryGetAllTasks(tryIt)();


//

function tryAndCatch(callback) {
    return async function (req, res, next) {
        try {
            await callback(req,res,next);
        } catch (error) {
            console.log('Error');
        }
    }
};

tryAndCatch(() => console.log('logger'))(); // logger
tryAndCatch(() => console.loog('logger'))(); // Error
