import { createContext } from 'react';
import { userInitialState } from '../reducers/user';
import type { UserLogin, UserState } from '../types/user';
import { useUser } from '../hooks/useUser';

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
	const { 
		user, 
		isLoading, 
		login,
		logout, 
	} = useUser();

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
