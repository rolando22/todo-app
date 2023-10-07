import { Toaster } from 'sonner';
import { LoginForm, Home } from './components';
import { useUserContext } from './hooks/useUserContext';

export function App() {
	const { user } = useUserContext();

	return (
		<div className='mx-auto max-w-5xl grid'>
			{user.token === '' 
				? <LoginForm /> 
				: <Home />
			}
			<Toaster richColors />
		</div>
	);
}
