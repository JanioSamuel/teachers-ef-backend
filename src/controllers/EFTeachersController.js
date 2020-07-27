const options = require('../config/options');
const api = require('../services/api');
const utils = require('../utils/utils');
const requestBody = require('../config/requestBody');

module.exports = {
  async index(req, res) {
    let teachersData = {};
    let response = {};
    const doDownload = false;
    async function getData() {
      if (doDownload) {
        console.log('Making download');
        response = await api.getTeachersIds(requestBody, options);

        teachersData = await api.getTeachersInfos(utils.concatIds(response), options);

        teachersData.data.forEach(element => {
          teachersData = element.data;
        });

        utils.createFileData(teachersData);
      } else {
        console.log('Reading file')
        teachersData = utils.readFileData();
      }
      res.json({ teachersData })
    }
    getData();
  }
}