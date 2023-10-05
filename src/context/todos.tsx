import { createContext, useEffect, useReducer } from 'react';
import { todosInitialState, todosReducer } from '../reducers/todos';
import { useUserContext } from '../hooks/useUserContext';
import { deleteTodo, getTodosByUser } from '../services/todos';
import type { TodoId, TodosState } from '../types/todo';

interface ContextProps {
	todos: TodosState
	removeTodo: (id: TodoId) => Promise<void>
}

export const TodosContext = createContext<ContextProps>({} as ContextProps);

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
				const todosData = await getTodosByUser(id);
				dispatch({ type: 'SET_TODOS', payload: todosData });
			} catch (error) {
				console.log(error);
			}
		})();
	}, [user]);

	const removeTodo = async (id: TodoId) => {
		try {
			const todo = await deleteTodo(id);
			dispatch({ type: 'REMOVE_TODO', payload: todo.id });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<TodosContext.Provider value={{
			todos, 
			removeTodo,
		}}>
			{children}
		</TodosContext.Provider>
	);
}
