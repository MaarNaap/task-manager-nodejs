const { CustomError } = require('../errors/customError');

function errorHandler(err, req, res, next) {
    if (err instanceof CustomError) {
       return res.status(err.status).send(err.message);
    }
    return res.status(500).send('Error:: Something wrong happened');
};

module.exports = errorHandler;