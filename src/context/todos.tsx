import { createContext } from 'react';
import { useTodos } from '../hooks/useTodos';
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
	const { 
		todos, 
		isLoading, 
		addTodo, 
		editTodo, 
		removeTodo,
		getTodo, 
	} = useTodos();

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
