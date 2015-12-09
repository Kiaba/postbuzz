'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

var account = require('../../components/account');

router.get('/info', account.isUser, controller.info);

module.exports = router;
