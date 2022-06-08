const express = require('express');

const Router = express.Router();
const subRoute = '/admin';

const contact = require('./Contact');

Router.use(`${subRoute}/contact`, contact);

module.exports = Router;
