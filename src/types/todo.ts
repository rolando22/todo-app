import { UserState } from './user';

export interface Todo {
    text: string 
    completed: boolean 
    userId: Pick<UserState, 'id'>
}

export interface TodoWithId extends Todo {
    id: number
}

export type TodosState = TodoWithId[];

export type TodosTypeAction = 
    | { type: 'SET_TODOS', payload: TodoWithId[] }
    // | { type: 'ADD_TODO', payload: Todo }
    // | { type: 'EDIT_TODO', payload: TodoWithId }
    // | { type: 'REMOVE_TODO', payload: Pick<TodoWithId, 'id'> }
