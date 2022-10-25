class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
};

function createCustomError(message, statusCode) {
    return new CustomError(message, statusCode);
};

module.exports = { CustomError, createCustomError };