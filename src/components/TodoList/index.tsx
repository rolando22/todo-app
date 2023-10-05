import { TodoItem } from '..';
import { useTodosContext } from '../../hooks/useTodosContext';

export function TodoList() {
	const { todos } = useTodosContext();

	return (
		<ul className='m-0 px-0 pt-0 pb-14'>
			{todos.map(todo => 
				<TodoItem 
					key={todo.id} 
					id={todo.id}
					text={todo.text}
					completed={todo.completed}
				/>
			)}
		</ul>
	);
}
