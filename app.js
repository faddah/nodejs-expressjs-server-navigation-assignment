const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path')

const usersRoutes = require('./routes/users');
const coRoutes = require('./routes/company');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/* 
app.use('/users', (req, res, next) => {
	console.log('In the Second Users Page Middleware!');
	res.send(`
		<h1>The Users Page</h1>
		<a href="/" alt="Link to The Company Home Page"><h3>Go Back To The Company Home Page</h3></a>.
	`);
});

app.use('/', (req, res, next) => {
	console.log('In the Main Company Home Page Middleware!');
	res.send(`
		<h1>Welcome to Our Company Home Page Node.JS & Express App!</h1>
		<a href="/users" alt"Link to Our Users Page"><h3>Go To Our Users Page</h3></a>.
	`);
});
 */

app.use(usersRoutes);
app.use(coRoutes);

app.use((req, res, next) => res.status(404).sendFile(path.join(rootDir, 'views', '404.html')));

const protocol = `http`;
const server = `127.0.0.1`
const port = `3000`

app.listen(3000, () => console.log(`Node.JS with Express.JS server now running @ ${protocol}://${server}:${port}.`));