/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/login              ->  login
 */

'use strict';

var LoginService = require('./login.service');

exports.login = function(req, res) {
  var options = {
	protocol: 'http',
	hostname: 'postbuzzwebapidev.azurewebsites.net',
	pathname: '/token',
	username: req.body.data.username,
	password: req.body.data.password
  }
  return LoginService.login(options, function(error, response, body) {
	var JSONObject = JSON.parse(body);
	if(!JSONObject.error) {
		req.session.user = JSONObject;
	}
    res.json(JSONObject);
  });
};
