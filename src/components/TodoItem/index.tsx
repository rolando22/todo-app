import { CompleteIcon, DeleteIcon, EditIcon } from '..';
import { useTodosContext } from '../../hooks/useTodosContext';
import { TodoId } from '../../types/todo';

interface Props {
	id: TodoId
    text: string
    completed: boolean
}

export function TodoItem({ id, text, completed }: Props) {
	const { removeTodo } = useTodosContext();

	const handlerRemoveTodo = () => removeTodo(id);

	return (
		<li className='rounded-xl bg-[#293143] relative flex justify-center items-center mt-6'>
			<CompleteIcon 
				completed={completed} 
				onComplete={() => {}} 
			/>
			<p className={`
                mx-10 my-6 w-[calc(100%-100px)] text-lg font-normal
                ${completed === true ? 'line-through decoration-[#171b26]' : ''}
            `}>
				{text}
			</p>
			<EditIcon onEdit={() => {}} /> 
			<DeleteIcon onDelete={handlerRemoveTodo} />
		</li>
	);
}
