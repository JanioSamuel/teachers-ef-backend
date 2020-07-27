const express = require('express');
const routes = express.Router();
const EFTeachersController = require('./controllers/EFTeachersController');

routes.get('/', EFTeachersController.index);

module.exports = routes;