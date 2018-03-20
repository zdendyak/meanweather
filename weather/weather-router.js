const router = require('express').Router();
const weatherCtrl = require('./weather-controller');

router.post('/current', weatherCtrl.getCurrentWeather);

router.post('/forecast', weatherCtrl.getForecastWeather);

module.exports = router;