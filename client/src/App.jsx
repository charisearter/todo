import { Fragment, useEffect } from 'react';

function App() {
	// GET Todos
	const getTodos = async () => {
		const res = await fetch('/api/todos/');
		const todos = await res.json();
		console.log(todos);
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<Fragment>
			<div className='container'>
				<h1>ToDo App Tester: Initial</h1>
			</div>
		</Fragment>
	);
}

export default App;
