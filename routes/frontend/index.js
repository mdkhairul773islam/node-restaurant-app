const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Hey', message: 'Hello there!' });
});
module.exports = router;
