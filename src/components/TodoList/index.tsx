import { TodoItem } from '..';

const todos = [
	{
		id: 1,
		text: 'Do something nice for someone I care about',
		completed: true,
		userId: 1,
	},
	{
		id: 2,
		text: 'Memorize the fifty states and their capitals',
		completed: false,
		userId: 2,
	},
	{
		id: 3,
		text: 'Watch a classic movie',
		completed: false, 
		userId: 3,
	},
	{
		id: 4,
		text: 'Contribute code or a monetary donation to an open-source software project',
		completed: false, 
		userId: 1,
	},
	{
		id: 5,
		text: 'Solve a Rubik\'s cube',
		completed: false,
		userId: 2,
	},
	{
		id: 6,
		text: 'Bake pastries for me and neighbor',
		completed: false,
		userId: 3,
	},
	{
		id: 7,
		text: 'Go see a Broadway production',
		completed: false,
		userId: 1,
	},
	{
		id: 8,
		text: 'Write a thank you letter to an influential person in my life',
		completed: true,
		userId: 2,
	},
	{
		id: 9,
		text: 'Invite some friends over for a game night',
		completed: false,
		userId: 3,
	},
	{
		id: 10,
		text: 'Have a football scrimmage with some friends',
		completed: false,
		userId: 1,
	},
	{
		id: 11,
		text: 'Text a friend I haven\'t talked to in a long time',
		completed: false,
		userId: 2,
	},
	{
		id: 12,
		text: 'Organize pantry',
		completed: true,
		userId: 3,
	},
	{
		id: 13,
		text: 'Buy a new house decoration',
		completed: false,
		userId: 1,
	},
	{
		id: 14,
		text: 'Plan a vacation I\'ve always wanted to take',
		completed: false,
		userId: 2,
	},
	{
		id: 15,
		text: 'Clean out car',
		completed: false,
		userId: 3,
	},
	{
		id: 16,
		text: 'Draw and color a Mandala',
		completed: true,
		userId: 1,
	},
	{
		id: 17,
		text: 'Create a cookbook with favorite recipes',
		completed: false,
		userId: 2,
	},
	{
		id: 18,
		text: 'Bake a pie with some friends',
		completed: false,
		userId: 3,
	},
	{
		id: 19,
		text: 'Create a compost pile',
		completed: true,
		userId: 1,
	},
	{
		id: 20,
		text: 'Take a hike at a local park',
		completed: true,
		userId: 2,
	},
	{
		id: 21,
		text: 'Take a class at local community center that interests you',
		completed: false,
		userId: 3,
	},
	{
		id: 22,
		text: 'Research a topic interested in',
		completed: false,
		userId: 1,
	},
	{
		id: 23,
		text: 'Plan a trip to another country',
		completed: true,
		userId: 2,
	},
	{
		id: 24,
		text: 'Improve touch typing',
		completed: false,
		userId: 3,
	},
	{
		id: 25,
		text: 'Learn Express.js',
		completed: false,
		userId: 1,
	},
	{
		id: 26,
		text: 'Learn calligraphy',
		completed: false,
		userId: 2,
	},
	{
		id: 27,
		text: 'Have a photo session with some friends',
		completed: false,
		userId: 3,
	},
	{
		id: 28,
		text: 'Go to the gym',
		completed: false,
		userId: 1,
	},
	{
		id: 29,
		text: 'Make own LEGO creation',
		completed: false,
		userId: 2,
	},
	{
		id: 30,
		text: 'Take cat on a walk',
		completed: false,
		userId: 3,
	}
];

export function TodoList() {
	return (
		<ul className='m-0 px-0 pt-0 pb-14'>
			{todos.map(todo => 
				<TodoItem 
					key={todo.id} 
					text={todo.text}
					completed={todo.completed}
				/>
			)}
		</ul>
	);
}
