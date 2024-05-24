const { getConnectedClient } = require('../database');

const getCollection = () => {
	const client = getConnectedClient();
	const collection = client.db('todosDb').collection('todos');
	return collection;
};

module.exports = { getCollection };
