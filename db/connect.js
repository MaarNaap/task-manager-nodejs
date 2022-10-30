// const dotenv = require('dotenv');
const mongoose = require('mongoose');

function connectDB(url) {
    return mongoose.connect(url, console.log('connected to db..'));
};

module.exports = connectDB;


// note the allowed ip addresses in https://cloud.mongodb.com/v2/634c63247b2a3a4822714a51#security/network/accessList
