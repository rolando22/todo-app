import { createContext, useEffect, useReducer } from 'react';
import { todosInitialState, todosReducer } from '../reducers/todos';
import { useUserContext } from '../hooks/useUserContext';
import { deleteTodo, getTodosByUser } from '../services/todos';
import type { TodoId, TodoWithId, TodosState } from '../types/todo';

interface ContextProps {
	todos: TodosState
	removeTodo: (id: TodoId) => Promise<void>
	getTodo: (id: TodoId) => TodoWithId | undefined
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

	const getTodo = (id: TodoId) => structuredClone(todos).find(todo => todo.id === id);

	return (
		<TodosContext.Provider value={{
			todos, 
			removeTodo,
			getTodo,
		}}>
			{children}
		</TodosContext.Provider>
	);
}
