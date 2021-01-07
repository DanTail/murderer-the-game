const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('Home page');
});

router.get('/create', function(req, res) {
    res.send('Create lobby');
});

router.get('/join', function(req, res) {
    res.send('Join lobby');
});

module.exports = router;
