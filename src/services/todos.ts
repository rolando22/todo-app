export const getTodosByUser = async (id: number) => {
	const response = await fetch(`http://localhost:3004/api/users/${id}/todos`);
	const { data } = await response.json();
	return data;
};
