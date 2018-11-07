const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

var handle = {}
handle['/'] = requestHandlers.home;
handle['/login'] = requestHandlers.login;
handle['/chart'] = requestHandlers.chart;
handle['/blank'] = requestHandlers.blank;
handle['/forget-password'] = requestHandlers.forgetPassword;
handle['/register'] = requestHandlers.register;
handle['/table'] = requestHandlers.table;
handle['/page-not-found'] = requestHandlers.pageNotFound; 

server.start(router.route, handle);