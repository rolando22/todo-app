import { createContext, useReducer } from 'react';
import { userInitialState, userReducer } from '../reducers/user';
import { authUser } from '../services/users';
import type { UserLogin, UserState } from '../types/user';

interface ContextProps {
    user: UserState,
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

	const login = async (loginData: UserLogin) => {
		try {
			const userData: UserState = await authUser(loginData);
			dispatch({ type: 'LOGIN', payload: userData });
		} catch (error) {
			console.log(error);
		}
	};

	const logout = () => dispatch({ type: 'LOGOUT', payload: null });

	return (
		<UserContext.Provider value={{
			user,
			login,
			logout,
		}}>
			{children}
		</UserContext.Provider>
	);
}
