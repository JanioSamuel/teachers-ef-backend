const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  q: process.env.Q_REQUEST_BODY
}