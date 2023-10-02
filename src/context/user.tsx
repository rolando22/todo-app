import { createContext, useReducer } from 'react';
import { userInitialState, userReducer } from '../reducers/user';
import { UserLogin, UserState } from '../types/user';

interface ContextProps {
    user: UserState,
    login: ({ username, password }: UserLogin) => void
}

export const UserContext = createContext<ContextProps>({} as ContextProps);

interface Props {
    children: JSX.Element
}

export function UserProvider({ children }: Props) {
	const [state, dispatch] = useReducer(userReducer, userInitialState);

	const login = ({ username, password }: UserLogin) => dispatch({ type: 'LOGIN', payload: { username, password } });

	return (
		<UserContext.Provider value={{
			user: state,
			login,
		}}>
			{children}
		</UserContext.Provider>
	);
}
