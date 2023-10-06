import { token } from '.';
import type { Todo, TodoId, TodoWithId, TodosState } from '../types/todo';

export const getTodosByUser = async (id: number) => {
	const response = await fetch(`http://localhost:3004/api/users/${id}/todos`);
	if (!response.ok) throw new Error('Server error');
	const { data }: { data: TodosState } = await response.json();
	return data;
};

export const createTodo = async (newTodo: Todo) => {
	const response = await fetch('http://localhost:3004/api/todos', {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': token, 
		},
		body: JSON.stringify(newTodo),
	});
	if (!response.ok) throw new Error('Server error');
	const { data }: { data: TodoWithId } = await response.json();
	return data;
};

export const updateTodo = async (todoId: TodoId, newTodo: Todo) => {
	const response = await fetch(`http://localhost:3004/api/todos/${todoId}`, {
		method: 'PATCH',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': token, 
		},
		body: JSON.stringify(newTodo),
	});
	if (!response.ok) throw new Error('Server error');
	const { data }: { data: TodoWithId } = await response.json();
	return data;
};

export const deleteTodo = async (id: TodoId) => {
	const response = await fetch(`http://localhost:3004/api/todos/${id}`, {
		method: 'DELETE',
		headers: { 'Authorization': token },
	});
	if (!response.ok) throw new Error('Server error');
	const { data }: { data: TodoWithId } = await response.json();
	return data;
};
