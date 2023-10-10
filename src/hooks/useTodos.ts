import { useEffect, useReducer, useState } from 'react';
import { toast } from 'sonner';
import { todosInitialState, todosReducer } from '../reducers/todos';
import { useUserContext } from './useUserContext';
import { setToken } from '../services';
import { createTodo, deleteTodo, getTodosByUser, updateTodo } from '../services/todos';
import { TodoId, TodoWithId } from '../types/todo';

export function useTodos() {
	const [todos, dispatch] = useReducer(todosReducer, todosInitialState);
	const { user, logout } = useUserContext();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (user.token === '') return reset();
		setToken(user.token);
		(async () => {
			try {
				setIsLoading(true);
				const todosData = await getTodosByUser();
				dispatch({ type: 'SET_TODOS', payload: todosData });
			} catch (error) {
				if (error instanceof Error) toast.error(error.message);
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
			toast.success('TODO created');
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
			console.log(error);
			logout();
		} finally {
			setIsLoading(false);
		}
	};

	const editTodo = async (newTodo: TodoWithId) => {
		try {
			setIsLoading(true);
			const todoData = await updateTodo(newTodo.id, { text: newTodo.text, completed: newTodo.completed, userId: user.id });
			dispatch({ type: 'EDIT_TODO', payload: todoData });
			toast.success('TODO updated');
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
			console.log(error);
			logout();
		} finally {
			setIsLoading(false);
		}
	};

	const removeTodo = async (id: TodoId) => {
		try {
			setIsLoading(true);
			const todo = await deleteTodo(id);
			dispatch({ type: 'REMOVE_TODO', payload: todo.id });
			toast.success('TODO deleted');
		} catch (error) {
			if (error instanceof Error) toast.error(error.message);
			console.log(error);
			logout();
		} finally {
			setIsLoading(false);
		}
	};

	const reset = () => dispatch({ type: 'RESET_TODOS', payload: null });

	const getTodo = (id: TodoId) => structuredClone(todos).find(todo => todo.id === id);

	return {
		todos, 
		isLoading, 
		addTodo, 
		editTodo, 
		removeTodo,
		getTodo,
	};
}