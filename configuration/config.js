require('dotenv').config()

module.exports = {
    port: process.env.PORT || 5000 ,
    activityEndpoint: process.env.ACTIVITY_ENDPOINT || "http://www.boredapi.com/api/activity"
}