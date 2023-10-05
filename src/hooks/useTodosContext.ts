import { useContext } from 'react';
import { TodosContext } from '../context/todos';

export function useTodosContext() {
	const todosContext = useContext(TodosContext);

	if (todosContext === undefined) throw new Error('useTodosContext must be used within a TodosProvider');

	return todosContext;
}
