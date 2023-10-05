import { createContext, useEffect, useReducer } from 'react';
import { todosInitialState, todosReducer } from '../reducers/todos';
import { useUserContext } from '../hooks/useUserContext';
import { getTodosByUser } from '../services/todos';
import type { TodosState } from '../types/todo';

interface ContextProps {
	todos: TodosState
}

export const TodosContext = createContext<ContextProps>({
	todos: []
} as ContextProps);

interface Props {
    children: JSX.Element
}

export function TodosProvider({ children }: Props) {
	const [todos, dispatch] = useReducer(todosReducer, todosInitialState);
	const { user } = useUserContext();

	useEffect(() => {
		if (user.token === '') return;
		(async () => {
			try {
				const { id } = user;
				const todosData: TodosState = await getTodosByUser(id);
				dispatch({ type: 'SET_TODOS', payload: todosData });
			} catch (error) {
				console.log(error);
			}
		})();
	}, [user]);

	return (
		<TodosContext.Provider value={{
			todos
		}}>
			{children}
		</TodosContext.Provider>
	);
}
