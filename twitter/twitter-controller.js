const config = require('../config');
const twit = require('twitter');

const twitter = new twit({
    consumer_key: config.twitterConsumerKey,
    consumer_secret: config.twitterConsumerSecret,
    access_token_key: config.twitterAccessToken,
    access_token_secret: config.twitterAccessTokenSecret
});

module.exports.getTwitterData = function(req, res) {
    var city = req.body.city;
    twitter.get('search/tweets', {q: city}, function(err, tweets, response) {
        if (err) {
            console.log(err);
            res.send({message: "Can't get data from Twitter"});
        };
        if (tweets && tweets.statuses) {
            res.send(tweets.statuses);
        } else {
            res.send({message: "Can't get data from Twitter"});
        }
        
    });
};