const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

const config = require('./config');
const port = config.port;

const app = express();
const server = http.createServer(app);


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public/dist')));


//Routes
const weatherRouter = require('./weather/weather-router');
const twitterRouter = require('./twitter/twitter-router');

app.use('/weather', weatherRouter);
app.use('/twitter', twitterRouter);

app.get('/', function (req, res) {
    res.render('index.html', {}, function (err) {
        if (err) console.log(err)
        else console.log('All must be good!');
    });
});

//development error handler
//will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message || 'Internal server error',
            error: err
        });
    });
};

//production error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message || 'Internal server error',
        error: {}
    });
});

server.listen(port, function (err) {
    if (err) {
        console.log('Something went wrong: ', err);
    } else {
        console.log('Listening on port: ', port);
    }
});

module.exports.server = server;