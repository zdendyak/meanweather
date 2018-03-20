# meanweather
Application to check the weather and find out what is new in your city)) (with Twitter API and OpenWeather API)

Angular app was developed as a separate app and was integrated in ExpressJS app.

In /public/angweather run npm install && ng build

To start all app after commands above 
in root directory run npm install && npm start


Attention!!
Add config/index.js in root folder with code:

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
