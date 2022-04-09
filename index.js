const express = require('express') 
const config = require('./configuration/config.js')
const apiRoutes = require('./routes/api.routes.js')

const app = express()

app.use(apiRoutes)

app.listen(config.port, () => {
    console.log(`API service is running on port: [${config.port}]`);
});

module.exports = app