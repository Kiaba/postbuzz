module.exports.isUser = function (req, res, next) {
	return req.session.hasOwnProperty('user') ? next(): res.status(401).end();
};
