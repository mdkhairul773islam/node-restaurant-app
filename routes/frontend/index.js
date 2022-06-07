const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

router.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'This is contact page', message: 'Hello there!' });
});
module.exports = router;
