function notFound(req, res, next) {
    res.status(404).send('resource not found');
};

module.exports = notFound;