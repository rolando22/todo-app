import { TodoList, TodoCounter } from './components';
import { UserProvider } from './context/user';

export function App() {
	return (
		<UserProvider>
			<div className='mx-auto max-w-5xl'>
				<header className='my-0 mx-auto py-12 w-[75%] grid gap-5'>
					<TodoCounter />
				</header>
				<main className='my-0 mx-auto w-[75%]'>
					<TodoList />
				</main>
			</div>
		</UserProvider>
	);
}
