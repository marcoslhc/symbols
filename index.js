var chalk = require('chalk'),
	success = chalk.green,
	error = chalk.red,
	info = chalk.white,
	warning = chalk.yellow,
	text = chalk.white,
	process = chalk.blue;

module.exports = {
	success: success('\u2714'),
	error: error('\u2718'),
	point: info('\u2794'),
	warning: warning('\u2757'),
	bullet: text('\u2731'),
	inbound: process('\u10142'),
	outbound: process('\u11013')
};
