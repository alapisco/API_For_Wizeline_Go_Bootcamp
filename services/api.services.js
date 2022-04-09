const axios = require('axios');
const config = require('../configuration/config.js');

const getActivity = async (type, participants) => {

    if (!participants) {
        participants = 1
    }

    var parameters = {
        participants: participants
    }

    if (type) {
        parameters.type = type
    }

    const response = await axios.get(config.activityEndpoint, {
        params: parameters
    });

    return response.data

};

module.exports = getActivity