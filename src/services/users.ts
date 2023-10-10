import { baseAPI } from '.';
import type { UserLogin, UserState } from '../types/user';

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));

export async function authUser (loginData: UserLogin) {
	await delay(3000);
	const response = await fetch(`${baseAPI}/api/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginData),
	});
	const { data, error } : { data: UserState, error: string } = await response.json();
	if (response.status === 401) throw new Error(error);
	if (!response.ok) throw new Error('Server error');
	return data;
}
