const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home page');
});

router.get('/create', (req, res) => {
  res.send('Create lobby');
});

router.get('/join', (req, res) => {
  res.send('Join lobby');
});

module.exports = router;
