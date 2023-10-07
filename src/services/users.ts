import type { UserLogin, UserState } from '../types/user';

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));

export async function authUser (loginData: UserLogin) {
	await delay(3000);
	const response = await fetch('http://localhost:3004/api/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginData),
	});
	if (response.status === 401) throw new Error('Invalid user or password');
	if (!response.ok) throw new Error('Server error');
	const { data } : { data: UserState } = await response.json();
	return data;
}
