import { TodoList } from './components';

export function App() {
	return (
		<div className='mx-auto max-w-5xl'>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<main className='my-0 mx-auto w-[75%]'>
				<TodoList />
			</main>
		</div>
	);
}
