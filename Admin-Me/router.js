const fs = require('fs');
const path = require('path');

const route = (handle, pathname, res, req) => {
	const extension = path.extname(pathname);
	const staticMap = {
		'.ico': 'image/x-icon',
		'.html': 'text/html',
		'.js': 'text/javascript',
		'.json': 'application/json',
		'.css': 'text/css',
		'.png': 'image/png',
		'.jpg': 'image/jpg',
		'.gif': 'image/gif',
		'.mp3': 'audio/mpeg',
		'.ttf': 'application/x-font-ttf',
	}
	const staticPath = __dirname + '/public';
	
	if(typeof handle[pathname] === 'function') {
		handle[pathname](res, req);
	} else {
		if( staticMap[extension] ) {
			fs.readFile( staticPath + pathname, (err, data) => {
				res.writeHead(200, {'Content-Type': staticMap[extension]});
				res.end(data);
			});
		} else {
			fs.readFile('./views/404.html', (err, data) => {
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.end(data);
			});
		}
	}
}
exports.route = route;