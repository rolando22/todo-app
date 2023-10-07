import { createContext, useEffect, useReducer, useState } from 'react';
import { todosInitialState, todosReducer } from '../reducers/todos';
import { useUserContext } from '../hooks/useUserContext';
import { createTodo, deleteTodo, getTodosByUser, updateTodo } from '../services/todos';
import type { TodoId, TodoWithId, TodosState } from '../types/todo';

interface ContextProps {
	todos: TodosState
	isLoading: boolean
	addTodo: (todoText: string) => Promise<void>
	editTodo: (newTodo: TodoWithId) => Promise<void>
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
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (user.token === '') return;
		(async () => {
			try {
				setIsLoading(true);
				const { id } = user;
				const todosData = await getTodosByUser(id);
				dispatch({ type: 'SET_TODOS', payload: todosData });
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [user]);

	const addTodo = async (todoText: string) => {
		try {
			setIsLoading(true);
			const todoData = await createTodo({ text: todoText, completed: false, userId: user.id });
			dispatch({ type: 'ADD_TODO', payload: todoData });
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const editTodo = async (newTodo: TodoWithId) => {
		try {
			setIsLoading(true);
			const todoData = await updateTodo(newTodo.id, { text: newTodo.text, completed: newTodo.completed, userId: user.id });
			dispatch({ type: 'EDIT_TODO', payload: todoData });
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const removeTodo = async (id: TodoId) => {
		try {
			setIsLoading(true);
			const todo = await deleteTodo(id);
			dispatch({ type: 'REMOVE_TODO', payload: todo.id });
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const getTodo = (id: TodoId) => structuredClone(todos).find(todo => todo.id === id);

	return (
		<TodosContext.Provider value={{
			todos, 
			isLoading, 
			addTodo, 
			editTodo, 
			removeTodo,
			getTodo,
		}}>
			{children}
		</TodosContext.Provider>
	);
}
