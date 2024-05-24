//  Endpoints

const express = require('express');
const router = express.Router();
const { getCollection } = require('./models/index');

// GET /todos
router.get('/todos', async (req, res) => {
	const collection = getCollection();
	const todos = await collection.find({}).toArray();

	res.status(200).json(todos);
});

// POST /todos
router.post('/todos', async (req, res) => {
	const collection = getCollection();
	const { todo } = req.body;

	const newTodo = await collection.insertOne({ todo, status: false });

	res.status(201).json({ todo, status: false, _id: newTodo.insertedId });
});

// PUT /todos/:id
router.put('/todos/:id', (req, res) => {
	res.status(200).json({ msg: 'PUT REQUEST to /api/todos/:id' });
});

// DELETE /todos/:id
router.delete('/todos/:id', (req, res) => {
	res.status(200).json({ msg: 'DELETE REQUEST to /api/todos/:id' });
});

module.exports = router;
