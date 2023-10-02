export function TodoCounter() {
	return (
		<>
			<section className='flex justify-between'>
				<p className='text-lg font-normal opacity-70'>username</p>
				<button className='text-lg font-normal'>Logout</button>
			</section>
			<h1 className='text-2xl text-center m-0 font-normal'>
                Has completado <span className='font-bold'>10</span> de <span className='font-bold'>20</span> TODOs
			</h1>
		</>
	);
}
