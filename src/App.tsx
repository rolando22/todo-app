import { TodoList, TodoCounter, LoginForm } from './components';
import { useUserContext } from './hooks/useUserContext';

export function App() {
	const { user } = useUserContext();

	return (
		<>
			<div className='mx-auto max-w-5xl grid h-screen'>
				{user.token === '' 
					? <LoginForm /> 
					: <>
						<header className='my-0 mx-auto py-12 w-[75%] grid gap-5'>
							<TodoCounter />
						</header>
						<main className='my-0 mx-auto w-[75%]'>
							<TodoList />
						</main>
					</>
				}
			</div>
		</>
	);
}
