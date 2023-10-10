import { useReducer, useState } from 'react';
import { toast } from 'sonner';
import { userInitialState, userReducer } from '../reducers/user';
import { authUser } from '../services/users';
import { setToken } from '../services';
import { UserLogin } from '../types/user';

export function useUser() {
	const [user, dispatch] = useReducer(userReducer, userInitialState);
	const [isLoading, setIsLoading] = useState(false);

	const login = async (loginData: UserLogin) => {
		try {
			setIsLoading(true);
			const userData = await authUser(loginData);
			dispatch({ type: 'LOGIN', payload: userData });
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const logout = () => {
		dispatch({ type: 'LOGOUT', payload: null });
		setToken('');
		toast.message('Log out');
	};

	return {
		user, 
		isLoading, 
		login,
		logout,
	};
}
