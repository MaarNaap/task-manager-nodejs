require('dotenv').config();
async function startApp(dbConnection, expressApp) {
    const port = process.env.port || 8521;
    try {
        await dbConnection(process.env.MONGO_URL);
        expressApp.listen(port, console.log(`server on ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
module.exports = startApp;