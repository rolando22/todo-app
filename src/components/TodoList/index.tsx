import { TodoItem } from '..';
import { useTodosContext } from '../../hooks/useTodosContext';
import type { ToggleModal } from '../../types/state';

interface Props {
	toggle: (newState: ToggleModal) => void
}

export function TodoList({ toggle }: Props) {
	const { todos } = useTodosContext();

	return (
		<ul className='m-0 px-0 pt-0 pb-14'>
			{[...todos].reverse().map(todo => 
				<TodoItem 
					key={todo.id} 
					id={todo.id}
					text={todo.text}
					completed={todo.completed}
					toggle={toggle}
				/>
			)}
		</ul>
	);
}
