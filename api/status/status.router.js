'use strict'
let router = require('koa-router')();
let statusHandlers = require('./status.handlers');

router.get('/status', statusHandlers.getStatus);

module.exports = router;