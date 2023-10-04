import { createContext, useReducer } from 'react';
import { todosInitialState, todosReducer } from '../reducers/todos';

const TodosContext = createContext({});

interface Props {
    children: JSX.Element
}

export function TodosProvider({ children }: Props) {
	const [todos, dispatch] = useReducer(todosReducer, todosInitialState);

	return (
		<TodosContext.Provider value={{}}>
			{children}
		</TodosContext.Provider>
	);
}
