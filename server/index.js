//  Import express
const express = require('express');

// Express instance called app
const app = express();

// import todo endpoint routes
const router = require('./routes')

// prefix endpoints with /api
app.use("/api", router)

//  port
const port = 5000;

// Listener
app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
});
