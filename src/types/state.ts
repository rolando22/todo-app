import type { TodoId } from './todo';

export interface ToggleModal {
    todoId?: TodoId
    type?: 'new' | 'edit' | ''
    open: boolean
}
