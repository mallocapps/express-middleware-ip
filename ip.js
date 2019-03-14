'use strict';

module.exports = function (req, res, next) {
    req.clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    next();
};
