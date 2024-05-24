import { Fragment, useEffect, useState } from 'react';

function App() {
	const [message, setMessage] = useState('');
	// GET Todos
	const getTodos = async () => {
		const res = await fetch('/api/todos/');
		const todos = await res.json();
		setMessage(todos.msg);
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<Fragment>
			<div className='container'>
				<h1>ToDo App Tester: Initial</h1>
				{message && <p>{message}</p>}
			</div>
		</Fragment>
	);
}

export default App;
