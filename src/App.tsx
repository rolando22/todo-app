import { TodoList, TodoCounter } from './components';

export function App() {
	return (
		<div className='mx-auto max-w-5xl'>
			<header className='my-0 mx-auto py-12 w-[75%] grid gap-5'>
				<TodoCounter />
			</header>
			<main className='my-0 mx-auto w-[75%]'>
				<TodoList />
			</main>
		</div>
	);
}
