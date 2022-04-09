const getActivity = require("../services/api.services.js"); 

const helloWorld = async (req, res) => {
    res.json({
        message: "Hello World!"
    })
};

const activity = async (req, res) => {
    var { type, participants } = req.query
    const activityData = await getActivity(type, participants)
    res.json(activityData)
};

module.exports = {
    helloWorld,
    activity
}