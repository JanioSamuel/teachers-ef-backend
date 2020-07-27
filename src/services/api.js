const axios = require('axios');
const qs = require('qs');
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  
  async getTeachersIds(requestBody, options) {
    try {
      const response = await axios.post(process.env.SITE_ENDPOINT, qs.stringify(requestBody, { encode: false }), options);
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async getTeachersInfos(requestTeachersInfos, options) {
    try {
      const teachersData = await axios.post(process.env.SITE_ENDPOINT, qs.stringify(requestTeachersInfos, { encode: false }), options);
      return teachersData;
    } catch (err) {
      console.log(err);
    }
  }
}