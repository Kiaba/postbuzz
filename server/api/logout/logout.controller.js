/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/logout              ->  index
 */

'use strict';

exports.index = function(req, res) {
  req.session.destroy();
  res.send({ result: true });
};
