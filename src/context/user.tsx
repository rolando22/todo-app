import { createContext, useReducer, useState } from 'react';
import { toast } from 'sonner';
import { userInitialState, userReducer } from '../reducers/user';
import { authUser } from '../services/users';
import type { UserLogin, UserState } from '../types/user';
import { setToken } from '../services';

interface ContextProps {
    user: UserState,
    isLoading: boolean,
    login: (loginData: UserLogin) => Promise<void>
	logout: () => void
}

export const UserContext = createContext<ContextProps>({ 
	user: userInitialState, 
} as ContextProps);

interface Props {
    children: JSX.Element
}

export function UserProvider({ children }: Props) {
	const [user, dispatch] = useReducer(userReducer, userInitialState);
	const [isLoading, setIsLoading] = useState(false);

	const login = async (loginData: UserLogin) => {
		try {
			setIsLoading(true);
			const userData = await authUser(loginData);
			dispatch({ type: 'LOGIN', payload: userData });
			setToken(userData.token);
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
		toast.success('Log out');
	};

	return (
		<UserContext.Provider value={{
			user, 
			isLoading, 
			login,
			logout,
		}}>
			{children}
		</UserContext.Provider>
	);
}
