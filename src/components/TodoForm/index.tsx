import { useState } from 'react';
import { useTodosContext } from '../../hooks/useTodosContext';
import type { ToggleModal } from '../../types/state';
import type { TodoId, TodoWithId } from '../../types/todo';

interface Props {
    type?: 'new' | 'edit' | '' 
    todoId?: TodoId
	toggle: (newState: ToggleModal) => void
}

export function TodoForm({ todoId = '', type, toggle }: Props) {
	const [isTextTodoInvalid, setIsTextTodoInvalid] = useState(false);
	const { getTodo, addTodo, editTodo } = useTodosContext();
	const [todo, setTodo] = useState<TodoWithId>(() => (getTodo(todoId) || { id: todoId, text: '', completed: false, userId: '' }));

	const handlerOnSubmitAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (todo.text === '') return setIsTextTodoInvalid(true);
		todoId === '' ? addTodo(todo.text) : editTodo(todo);
		toggle({ todoId: '', open: false });
	};

	const handlerOnClickToggleModal = () => toggle({ todoId: '', open: false });
	const handlerOnChangeSetTodo = (event: React.ChangeEvent<HTMLTextAreaElement>) => 
		setTodo((prevState => ({ ...prevState, text: event.target.value })));

	return (
		<form 
			className='w-[90%] max-w-xs bg-[#171b26] rounded-3xl px-8 py-10 grid justify-center content-center gap-4'
			onSubmit={handlerOnSubmitAddTodo}
		>
			<label 
				htmlFor='todoText'
				className='text-center font-bold text-xl text-[#fff]'
			>
				{type === 'new' ? 'Add new TODO' : 'Edit TODO'}
			</label>
			<textarea 
				className='bg-[#293143] border-[2px] border-[#202329] rounded-xl text-[#fff] text-xl text-center p-3 h-32 w-full placeholder:text-[#4f6b7f] placeholder:font-normal focus:outline-[#61dafa]'
				name='todoText' 
				id='todoText' 
				placeholder='Write your new TODO here'
				value={todo.text}
				onChange={handlerOnChangeSetTodo}
			/>
			<p className={`${isTextTodoInvalid ? 'text-[#e2685c]' : 'hidden'}`}>
				TODO can't be empty text
			</p>
			<div className='flex justify-between items-center w-full gap-4'>
				<button
					type='button'
					className='cursor-pointer inline-block text-xl font-normal w-32 h-10 rounded-lg border-none bg-[#293143]'
					onClick={handlerOnClickToggleModal}
				>
					Cancel
				</button>
				<button
					type='submit'
					className='cursor-pointer inline-block text-xl font-normal w-32 h-10 rounded-lg border-none bg-[#47c2be]'
				>
					Save
				</button>
			</div>
		</form>
	);
}
