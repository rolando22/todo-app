import { createContext, useReducer } from 'react';
import { userInitialState, userReducer } from '../reducers/user';
import { UserLogin, UserState } from '../types/user';

interface ContextProps {
    user: UserState,
    login: (loginData: UserLogin) => void
}

export const UserContext = createContext<ContextProps>({ 
	user: userInitialState, 
} as ContextProps);

interface Props {
    children: JSX.Element
}

export function UserProvider({ children }: Props) {
	const [state, dispatch] = useReducer(userReducer, userInitialState);

	const login = (loginData: UserLogin) => dispatch({ type: 'LOGIN', payload: loginData });

	return (
		<UserContext.Provider value={{
			user: state,
			login,
		}}>
			{children}
		</UserContext.Provider>
	);
}
