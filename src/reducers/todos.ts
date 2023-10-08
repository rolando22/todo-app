import type { TodoWithId, TodosState, TodosTypeAction } from '../types/todo';

export const todosInitialState: TodosState = [];

const todosReducerObject = (state: TodosState, action: TodosTypeAction) => ({
	['SET_TODOS']: () => {
		const newState = [...action.payload as TodosState];
		return [...newState];
	},
	['ADD_TODO']: () => {
		const newState = structuredClone(state);
		return [...newState, action.payload as TodoWithId];
	},
	['EDIT_TODO']: () => {
		const todoIndex = state.findIndex(todo => todo.id === (action.payload as TodoWithId).id);
		if (todoIndex === -1) return state;
		const newState = structuredClone(state);
		newState[todoIndex] = action.payload as TodoWithId;
		return newState;
	},
	['REMOVE_TODO']: () => {
		const newState = state.filter(todo => todo.id !== action.payload);
		return [...newState];
	},
	['RESET_TODOS']: () => todosInitialState,
});

export const todosReducer = (state: TodosState, action: TodosTypeAction) => {
	return todosReducerObject(state, action)[action.type]() || state;
};
