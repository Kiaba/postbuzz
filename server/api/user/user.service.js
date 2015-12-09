var url = require('url');
var request = require('request');

exports.info = function (options, callback) {
	return request.get({
		'url': url.format({
		  protocol: options.protocol,
		  hostname: options.hostname,
		  pathname: options.pathname
		}),
		'headers': {
		  'Authorization': 'Bearer ' + options.access_token
		}
	}, function(error, response, body) {
		callback(error, response, body);
	})
};
