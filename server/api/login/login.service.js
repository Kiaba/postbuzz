var url = require('url');
var request = require('request');

exports.login = function (options, callback) {
	return request.post({
		'url': url.format({
		  protocol: options.protocol,
		  hostname: options.hostname,
		  pathname: options.pathname
		}),
		'form': {
			'userName': options.username,
			'password': options.password,
			'grant_type': 'password'
		}
	}, function(error, response, body) {
		callback(error, response, body);
	})
};
