import { useState } from 'react';
import { CreateTodoButton, Modal, TodoCounter, TodoForm, TodoList } from '..';
import type { ToggleModal } from '../../types/state';

export function Home() {
	const [toggleModal, setToggleModal] = useState<ToggleModal>({ todoId: '', type: '', open: false });

	const toggle = (newState: ToggleModal) => 
		setToggleModal(prevState => ({ ...prevState, ...newState }));

	return (
		<>
			<header className='my-0 mx-auto py-12 w-[75%] grid gap-6'>
				<TodoCounter />
				<section className='flex justify-center items-center'>
					<CreateTodoButton toggle={toggle} />
				</section>
			</header>
			<main className='my-0 mx-auto w-[75%] grid'>
				<TodoList toggle={toggle} />
			</main>
			{toggleModal.open && 
				<Modal>
					<TodoForm 
						type={toggleModal.type}
						todoId={toggleModal.todoId}
						toggle={toggle} 
					/>
				</Modal>
			}
		</>
	);
}
