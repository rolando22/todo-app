import { useContext } from 'react';
import { UserContext } from '../context/user';

export function useUserContext() {
	const userContext = useContext(UserContext);

	if (userContext === undefined) throw new Error('useTransactionsContext debe usarse dentro de un TransactionsProvider');

	return userContext;
}
