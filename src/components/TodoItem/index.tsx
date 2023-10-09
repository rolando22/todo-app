import { CompleteIcon, DeleteIcon, EditIcon, LoadScreen } from '..';
import { useTodosContext } from '../../hooks/useTodosContext';
import type { ToggleModal } from '../../types/state';
import type { TodoId } from '../../types/todo';

interface Props {
	id: TodoId
    text: string
    completed: boolean
	toggle: (newState: ToggleModal) => void
}

export function TodoItem({ id, text, completed, toggle }: Props) {
	const { isLoading, editTodo, removeTodo } = useTodosContext();

	const handlerRemoveTodo = () => removeTodo(id);
	const handlerEditTodo = () => editTodo({ id, text, completed: !completed });
	const handlerToggleEditTodo = () => toggle({ todoId: id, type: 'edit', open: true });

	return (
		<>
			{isLoading && <LoadScreen />}
			<li className='rounded-xl bg-[#293143] relative flex justify-center items-center mt-6'>
				<CompleteIcon 
					completed={completed} 
					onComplete={handlerEditTodo} 
				/>
				<p className={`
					mx-10 my-6 w-[calc(100%-100px)] text-lg font-normal
					${completed === true ? 'line-through decoration-[#171b26]' : ''}
				`}>
					{text}
				</p>
				<EditIcon onEdit={handlerToggleEditTodo} /> 
				<DeleteIcon onDelete={handlerRemoveTodo} />
			</li>
		</>
	);
}
