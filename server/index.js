//  Import express
const express = require('express');

// Express instance called app
const app = express();

// test router
app.get('/hello', (req, res) => {
	res.status(200).json({ msg: 'Hello' });
});

//  port
const port = 5000;

// Listener
app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
});
