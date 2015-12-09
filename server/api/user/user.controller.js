/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/user              ->  index
 */

'use strict';

var url = require('url');
var request = require('request');

var UserService = require('./user.service');

exports.info = function(req, res) {
  var options = {
	  protocol: 'http',
	  hostname: 'postbuzzwebapidev.azurewebsites.net',
	  pathname: '/api/Account/UserInfo',
	  access_token: req.session.user.access_token
  }
  return UserService.info(options, function(error, response, body) {
	var JSONObject = JSON.parse(body);
    res.json(JSONObject);
  });
};
