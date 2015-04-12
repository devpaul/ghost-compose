// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path');
var mailcatcher = {
	transport: 'SMTP',
	options: {
		host: 'mail',
		port: 1025,
		service: 'mySMTPService'
	}
};

var mailgun = {
	transport: 'SMTP',
	options: {
		service: 'Mailgun',
		auth: {
			user: process.env.MAILGUN_USER,     // mailgun username
			pass: process.env.MAILGUN_PASSWORD  // mailgun password
		}
	}
};

var postgres = {
	client: 'pg',
	connection: {
		host     : process.env.POSTGRES_HOST || 'postgres',
		user     : process.env.POSTGRES_GHOST_USER,
		password : process.env.POSTGRES_GHOST_PASSWORD,
		database : process.env.POSTGRES_GHOST_DB,
		charset  : 'utf8'
	}
};

var sqllite = {
	client: 'sqlite3',
	connection: {
		filename: path.join(__dirname, '/content/data/ghost.db')
	},
	debug: false
};

var config = {
	// ### Production
	// When running Ghost in the wild, use the production environment
	// Configure your URL and mail settings here
	production: {
		url: process.env.GHOST_URL,
		mail: mailgun,
		database: postgres,
		server: {
			// Host to be passed to node's `net.Server#listen()`
			host: '0.0.0.0',
			// Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
			port: '2368'
		}
	},

	// ### Development **(default)**
	development: {
		// The url to use when providing links to the site, E.g. in RSS and email.
		// Change this to your Ghost blogs published URL.
		url: process.env.GHOST_URL,
		mail: mailcatcher,
		database: postgres,
		server: {
			// Host to be passed to node's `net.Server#listen()`
			host: '0.0.0.0',
			// Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
			port: '2368'
		},
		paths: {
			contentPath: path.join(__dirname, '/content/')
		}
	}
};

// Export config
module.exports = config;