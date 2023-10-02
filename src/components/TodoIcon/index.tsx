import { Check, Delete, Edit } from '..';

interface iconType {
    'check': (color: string) => JSX.Element,
    'delete': (color: string) => JSX.Element
    'edit': (color: string) => JSX.Element
}

const iconTypes: iconType = {
	'check': (color: string) => <Check fill={color} />,
	'delete': (color: string) => <Delete fill={color} />,
	'edit': (color: string) => <Edit fill={color} />,
};

interface TodoIconProps {
    type: 'check' | 'delete' | 'edit'
    color: string
    onClick: () => void
}

export function TodoIcon({ type, color, onClick }: TodoIconProps) {
	return (
		<span
			className={`
                cursor-pointer flex justify-center items-center h-12 w-12 text-2xl font-bold 
                ${type === 'check' ? 'absolute left-1' : ''}
                ${type === 'delete' ? 'absolute top-[-24px] right-0' : ''}
                ${type === 'edit' ? 'absolute top-[-24px] right-12' : ''}
            `}
			onClick={onClick}
		>
			{iconTypes[type](color)}
		</span>
	);
}

interface CompleteIconProps {
    completed: boolean
    onComplete: () => void
}

export function CompleteIcon({ completed, onComplete }: CompleteIconProps) {
	return (
		<TodoIcon 
			type='check'
			color={`${completed ? '#47c2be' : '#5e6b78'}`}
			onClick={onComplete}
		/>
	);
}

interface DeleteIconProps {
    onDelete: () => void
}

export function DeleteIcon({ onDelete }: DeleteIconProps) {
	return (
		<TodoIcon 
			type='delete'
			color='#5e6b78'
			onClick={onDelete}
		/>
	);
}

interface EditIconProps {
    onEdit: () => void
}

export function EditIcon({ onEdit }: EditIconProps) {
	return (
		<TodoIcon
			type='edit'
			color='#5e6b78'
			onClick={onEdit}
		/>
	);
}
