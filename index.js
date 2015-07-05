'use strict';

const koa = require('koa');
const app = koa();
const settings = require('./api/conf/app.settings');
const http = require('http');

require('./api/conf/app.bootstrap')(app);
require('./api/conf/app.routes')(app);

let server = http.createServer(app.callback());

server.listen(settings.port, function() {
    
   console.log('Surfify Server started on port:', settings.port);
    
});