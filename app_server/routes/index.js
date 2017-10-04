var express = require('express');
var router = express.Router();

var ctrl = require('../controllers/ctrl');

/* GET home page. */
router.get('/', ctrl.main);

module.exports = router;
