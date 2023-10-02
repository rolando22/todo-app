import { CompleteIcon, DeleteIcon, EditIcon } from '..';

interface Props {
    text: string
    completed: boolean
}

export function TodoItem({ text, completed }: Props) {
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
			<DeleteIcon onDelete={() => {}} />
		</li>
	);
}
