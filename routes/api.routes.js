const express = require("express");
const router = express.Router();
const {
    helloWorld,
    activity
} = require('../controllers/api.controller.js')


router.get('/api', helloWorld);
router.get('/api/activity', activity);


module.exports = router;