var jwt = require('jsonwebtoken');
var config = require('../config/index');

function checkToken(token, callback) {
    jwt.verify(token, config.jwt.secret, function (err, decoded) {
        if (err) {
            var error = new Error('Invalid token!');
            error.status = 401;
            return callback(error);
        }
        return callback(null, decoded);
    });
}

function authMiddleware(req, res, next) {
    var token = req.headers['authorization'];
    checkToken(token, function (err, decoded) {
        if (err) {
            return next(err, req, res);
        }
        req.user = {
            id: decoded.id,
            role: decoded.role
        };
        next(null, req, res);
    });
}

module.exports = authMiddleware;
