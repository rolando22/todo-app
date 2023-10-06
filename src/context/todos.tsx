import { createContext, useEffect, useReducer } from 'react';
import { todosInitialState, todosReducer } from '../reducers/todos';
import { useUserContext } from '../hooks/useUserContext';
import { createTodo, deleteTodo, getTodosByUser, updateTodo } from '../services/todos';
import type { TodoId, TodoWithId, TodosState } from '../types/todo';

interface ContextProps {
	todos: TodosState
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

	const addTodo = async (todoText: string) => {
		try {
			const todoData = await createTodo({ text: todoText, completed: false, userId: user.id });
			dispatch({ type: 'ADD_TODO', payload: todoData });
		} catch (error) {
			console.log(error);
		}
	};

	const editTodo = async (newTodo: TodoWithId) => {
		try {
			const todoData = await updateTodo(newTodo.id, { text: newTodo.text, completed: newTodo.completed, userId: user.id });
			dispatch({ type: 'EDIT_TODO', payload: todoData });
		} catch (error) {
			console.log(error);
		}
	};

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
			addTodo, 
			editTodo, 
			removeTodo,
			getTodo,
		}}>
			{children}
		</TodosContext.Provider>
	);
}
