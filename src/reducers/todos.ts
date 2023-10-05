import type { TodosState, TodosTypeAction } from '../types/todo';

export const todosInitialState: TodosState = [];

const todosReducerObject = (_state: TodosState, action: TodosTypeAction) => ({
	['SET_TODOS']: action.payload,
	// ['ADD_TODO']: state,
	// ['EDIT_TODO']: state,
	// ['REMOVE_TODO']: state,
});

export const todosReducer = (state: TodosState, action: TodosTypeAction) => {
	return todosReducerObject(state, action)[action.type];
};
