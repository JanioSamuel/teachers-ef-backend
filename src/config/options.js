const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  headers: {
    'cookie': process.env.COOKIE,
    'authority': process.env.AUTHORITY,
    'content-type': "application/x-www-form-urlencoded",
    'accept': "*/*",
    'origin': process.env.ORIGIN,
    'sec-fetch-site': "same-origin",
    'sec-fetch-mode': "cors",
    'sec-fetch-dest': "empty",
    'referer': process.env.REFERER,
    'accept-language': "en-US,en;q=0.9,pt;q=0.8",
    'content-length': "0"
  }
}
