const express = require('express');

const app = express();

const protocol = `http`;
const server = `127.0.0.1`
const port = `3000`

app.listen(3000, () => console.log(`Node.JS with Express.JS server now running @ ${protocol}://${server}:${port}.`));