import { LoginForm, Home } from './components';
import { useUserContext } from './hooks/useUserContext';

export function App() {
	const { user } = useUserContext();

	return (
		<>
			<div className='mx-auto max-w-5xl grid h-screen'>
				{user.token === '' 
					? <LoginForm /> 
					: <Home />
				}
			</div>
		</>
	);
}
