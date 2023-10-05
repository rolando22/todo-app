import type { TodosState, TodosTypeAction } from '../types/todo';

export const todosInitialState: TodosState = [];

const todosReducerObject = (state: TodosState, action: TodosTypeAction) => ({
	['SET_TODOS']: () => {
		const newState = [...action.payload as TodosState];
		return [...newState];
	},
	// ['ADD_TODO']: state,
	// ['EDIT_TODO']: state,
	['REMOVE_TODO']: () => {
		const newState = state.filter(todo => todo.id !== action.payload);
		return [...newState];
	},
});

export const todosReducer = (state: TodosState, action: TodosTypeAction) => {
	return todosReducerObject(state, action)[action.type]() || state;
};
