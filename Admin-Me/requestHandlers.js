const fs = require('fs');

module.exports = {
	home: (res) => {
		fs.readFile('./views/index.html', (err, data) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	},
	login: (res) => {
		fs.readFile('./views/login.html', (err, data) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	},
	chart: (res) => {
		fs.readFile('./views/charts.html', (err, data) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	},
	blank: (res) => {
		fs.readFile('./views/blank.html', (err, data) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	},
	forgetPassword: (res) => {
		fs.readFile('./views/forget-password.html', (err, data) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	},
	register: (res) => {
		fs.readFile('./views/register.html', (err, data) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	},
	table: (res) => {
		fs.readFile('./views/tables.html', (err, data) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	},
	pageNotFound: (res) => {
		fs.readFile('./views/404.html', (err, data) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	}
}