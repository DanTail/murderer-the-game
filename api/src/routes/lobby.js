const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/create', (req, res) => {
  const token = jwt.sign({}, process.env.JWT_KEY, { expiresIn: '4h' });
  res.json({token: token});
});

router.get('/:token', (req, res) => {
  const token = req.params.token;
  res.send(jwt.verify(token, process.env.JWT_KEY));
});

router.get('/', (req, res) => {
  res.send('Home page');
});

module.exports = router;
