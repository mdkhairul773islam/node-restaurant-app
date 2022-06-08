const express = require('express');

const Router = express.Router();

const {
  AddContact,
  UpdateContact,
  GetContact,
  GetContactList,
  DeleteContact,
} = require('../../controller/Contact.controller');

Router.post('/', AddContact);
Router.put('/:id', UpdateContact);
Router.get('/', GetContact);
Router.get('/list', GetContactList);
Router.delete('/', DeleteContact);

module.exports = Router;
