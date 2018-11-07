const http = require('http');
const url = require('url');
const fs = require('fs');

const start = (route, handle) => {
	http.createServer((req, res) => {
		const pathname = url.parse(req.url).pathname;
		route(handle, pathname, res, req);
		console.log('Create Server 80 Complete');
	}).listen(80);
};
exports.start = start;