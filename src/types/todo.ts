import { UserState } from './user';

export type TodoId = number;

export interface Todo {
    text: string 
    completed: boolean 
    userId: Pick<UserState, 'id'>
}

export interface TodoWithId extends Todo {
    id: TodoId
}

export type TodosState = TodoWithId[];

export type TodosTypeAction = 
    | { type: 'SET_TODOS', payload: TodosState }
    // | { type: 'ADD_TODO', payload: Todo }
    // | { type: 'EDIT_TODO', payload: TodoWithId }
    | { type: 'REMOVE_TODO', payload: TodoId }
