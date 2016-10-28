const unirest = require('unirest');

const APP_URL = 'https://yoda.p.mashape.com/yoda';
const APP_ID = process.env.YODA_KEY;

function yodaSpeak(req, res, next) {
  unirest.get(`${APP_URL}?sentence=${req.body.yodafy}`)

  .header('X-Mashape-Key', `${APP_ID}`)
  .header('Accept', 'text/plain')
  .end((result) => {
    res.yoda = result;
    // console.log(result.status, result.headers, result.body);
    next();
  });
}

module.exports = { yodaSpeak };


// const fetch = require('node-fetch');

// const APP_URL = 'https://yoda.p.mashape.com/yoda';
// const APP_ID = process.env.YODA_KEY;
// function yodaSpeak(req, res, next) {
//   fetch('https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.', {
//     method: 'GET',
//     headers: {
//       'X-Mashape-Key': '7Rx98NZFGGmshRA8ec4vHJWuhFXsp1iAbzgjsnO6lK0hJxzEZU',
//       'Accept': 'text/plain',
//     },
//   })
//   .then(r => r.json())
//   .then((result) => {
//     res.yoda = result;
//     next();
//   })
//   .catch((err) => {
//     res.error = err;
//     next();
//   });
// }

// module.exports = { yodaSpeak };
