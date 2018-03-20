const port = process.env.PORT || 8080;
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'YOUR_API_URL';
const twitterConsumerKey ='YOUR_TWITTER_CONSUMER_KEY';
const twitterConsumerSecret = 'YOUR_TWITTER_CONSUMER_SECRET';
const twitterAccessToken = 'YOUR_TWITTER_ACCESS_TOKEN';
const twitterAccessTokenSecret = 'YOUR_TWITTER_ACCESS_TOKEN_SECRET';

module.exports = {
  port: port,
  apiKey: apiKey,
  apiUrl: apiUrl,
  twitterAccessToken: twitterAccessToken,
  twitterAccessTokenSecret: twitterAccessTokenSecret,
  twitterConsumerKey: twitterConsumerKey,
  twitterConsumerSecret: twitterConsumerSecret
}
