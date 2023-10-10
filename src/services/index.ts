export let token = '';

export const setToken = (newToken: string) => {
	token = `Bearer ${newToken}`;
};

export const baseAPI = 'http://localhost:3004';
