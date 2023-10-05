interface Props {
    children: JSX.Element
}

export function Modal({ children }: Props) {
	return (
		<section className='bg-[rgba(32, 35, 41, 0.8)] flex justify-center items-center text-white fixed top-0 right-0 bottom-0 left-0'>
			{children}  
		</section>
	);
}
