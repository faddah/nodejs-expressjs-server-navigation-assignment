const express = require('express');

const app = express();

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

const protocol = `http`;
const server = `127.0.0.1`
const port = `3000`

app.listen(3000, () => console.log(`Node.JS with Express.JS server now running @ ${protocol}://${server}:${port}.`));