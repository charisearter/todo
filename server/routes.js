//  Endpoints

const express = require('express');

// router
const router = express.Router();

// GET /todos
router.get('/todos', (req, res) => {
	res.status(200).json({ msg: 'GET REEQUEST to /api/todos' });
});

// POST /todos
router.post('/todos', (req, res) => {
	res.status(201).json({ msg: 'POST REQUEST to /api/todos' });
});

// PUT /todos/:id
router.put('/todos/:id', (req, res) => {
	res.status(200).json({ msg: 'PUT REQUEST to /api/todos/:id' });
});

// DELETE /todos/:id
router.delete('/todos/:id', (req, res) => {
	res.status(200).json({ msg: 'DEELETE REQUEST to /api/todos/:id' });
});

module.exports = router;
