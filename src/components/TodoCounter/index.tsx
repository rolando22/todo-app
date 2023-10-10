import { useUserContext } from '../../hooks/useUserContext';

export function TodoCounter() {
	const { user, logout } = useUserContext();

	const handlerOnClickLogout = () =>  logout();

	return (
		<>
			<section className='flex justify-between'>
				<div className='flex justify-center items-center gap-3'>
					<figure className='w-10 h-10 bg-[#293143] rounded-full'>
						<img src={user.image} alt={user.username} />
					</figure>
					<p className='text-lg font-normal opacity-70'>{user.username}</p>
				</div>
				<button 
					className='text-lg font-normal opacity-70 hover:opacity-100'
					onClick={handlerOnClickLogout}
				>
					Logout
				</button>
			</section>
			<h1 className='text-2xl text-center m-0 font-normal'>
				You have completed <span className='font-bold'>10</span> of <span className='font-bold'>20</span> TODOs
			</h1>
		</>
	);
}
