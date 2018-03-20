const router = require('express').Router();
const twitterCtrl = require('./twitter-controller');

router.post('/tweets', twitterCtrl.getTwitterData);
module.exports = router;