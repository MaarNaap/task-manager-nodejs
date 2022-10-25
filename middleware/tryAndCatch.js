function tryAndCatch(fn) {
    async function asyncWrapper(req, res, next) {
        try {
            await fn(req, res, next);
        } catch (error) {
            // console.log('Error:: ' + error);
            next(error);
        }
    }
    return asyncWrapper;
};

module.exports = tryAndCatch;