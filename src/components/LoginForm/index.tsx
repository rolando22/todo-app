import { useUserContext } from '../../hooks/useUserContext';

export function LoginForm() {
	const { login } = useUserContext();

	const handlerOnSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		login({ email, password });
	};

	return (
		<div className='grid justify-center gap-3'>
			<h1 className='font-medium text-xl text-center self-center'>Welcome</h1>
			<form className='flex flex-col gap-4 w-80' onSubmit={handlerOnSubmitLogin}>
				<div className='flex flex-col gap-1'>
					<label htmlFor='email' className='font-light text-sm'>Email:</label>
					<input 
						className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-white/60 focus:outline-none py-2 px-4' 
						type='text' 
						id='email' 
						name='email' 
						placeholder='peter@platzi.com' 
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label htmlFor='password' className='font-light text-sm'>Password:</label>
					<input 
						className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' 
						type='text' 
						id='password' 
						name='password' 
					/>
				</div>
				<button 
					className='bg-black text-white w-full rounded-lg py-3'
				>
                    Login
				</button>
			</form>
		</div>
	);
}
