const request = require('request');
const config = require('../config');
const apiKey = config.apiKey;
const apiUrl = config.apiUrl;

module.exports.getCurrentWeather = function (req, res) {
    let city = req.body.city;
    let url = apiUrl + `/weather?q=${city}&units=metric&appid=${apiKey}`;
    request(url, function (err, response, body) {
        if (err) {
            res.json({
                message: "Cannot get data from server, please try again"
            });
        } else {
            let data = JSON.parse(body);
            if (!data || !data.name) {
                res.json({
                    message: "Error, please try again"
                });
            } else {
                let weather = {
                        coord: data.coord,
                        name: data.name,
                        country: data.sys.country,
                        sunrise: data.sys.sunrise * 1000,
                        sunset: data.sys.sunset * 1000,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                        temp: data.main.temp,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                        wind: data.wind,
                        clouds: data.clouds.all,
                        dt: data.dt * 1000
                    };
                res.status(200).json(weather);
            }
        }
    });
};

module.exports.getForecastWeather = function (req, res) {
    let city = req.body.city;
    let url = apiUrl + `/forecast?q=${city}&units=metric&appid=${apiKey}`;
    request(url, function (err, response, body) {
        if (err) {
            res.json({
                message: "Cannot get data from server, please try again"
            });
        } else {
            let data = JSON.parse(body);
            if (data && !data.city) {
                res.json({
                    message: 'No data for such city name'
                });
            } else if (data && data.list) {
                if (data.list.length == 0) {
                    res.json({
                        message: "No data available"
                    });
                } else {
                    let weather = {};
                        
                    weather.name = data.city.name,
                    weather.country = data.city.country,
                    weather.list = [];
                    data.list.map(data => {
                        d = {
                            clouds: data.clouds.all,
                            dt: data.dt * 1000,
                            temp: data.main.temp,
                            humidity: data.main.humidity,
                            pressure: data.main.pressure,
                            description: data.weather[0].description,
                            icon: data.weather[0].icon,
                            wind: data.wind,
                            rain: data.rain
                        };
                        weather.list.push(d);
                    });
                       /* sunrise: data.sys.sunrise * 1000,
                        sunset: data.sys.sunset * 1000,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                        temp: data.main.temp,
                        humidity: data.main.humidity,
                        pressure: data.main.pressure,
                        wind: data.wind,
                        clouds: data.clouds.all,
                        dt: data.dt * 1000*/
                    


                    res.status(200).json(weather);
                    
                }
            } else {
                res.json({
                    message: "Cannot get data from server, please try again"
                });
            }

        }
    });
};