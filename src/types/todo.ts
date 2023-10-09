import { UserId } from './user';

export type TodoId = string;

export interface Todo {
    text: string 
    completed: boolean 
    userId?: UserId
}

export interface TodoWithId extends Todo {
    id: TodoId
}

export type TodosState = TodoWithId[];

export type TodosTypeAction = 
    | { type: 'SET_TODOS', payload: TodosState }
    | { type: 'ADD_TODO', payload: TodoWithId }
    | { type: 'EDIT_TODO', payload: TodoWithId }
    | { type: 'REMOVE_TODO', payload: TodoId }
    | { type: 'RESET_TODOS', payload: null }
