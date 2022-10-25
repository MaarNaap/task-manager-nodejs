const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/404');
const errorHandler = require('./middleware/errorHandler');
// require('dotenv').config();
const start = require('./start');

const app = express();

app.use(express.json());
app.use('/api/tasks', tasks);
app.use(notFound); // 404 . after all routes
app.use(errorHandler); // at the end

// start app here
start(connectDB, app);








// async function start() {
//     const port = process.env.port || 8521;
//     try {
//         await connectDB(process.env.MONGO_URL);
//         app.listen(port, console.log(`server on ${port}...`));
//     } catch (error) {
//         console.log(error);
//     }
// };
// start()