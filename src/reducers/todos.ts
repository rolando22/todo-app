import type { TodosState, TodosTypeAction } from '../types/todo';

export const todosInitialState: TodosState = [];

const todosReducerObject = (state: TodosState, _action: TodosTypeAction) => state;

export const todosReducer = (state: TodosState, action: TodosTypeAction) => {
	return todosReducerObject(state, action);
};
