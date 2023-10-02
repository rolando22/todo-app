import type { UserState, UserTypeAction } from '../types/user';

export const userInitialState: UserState = {
	id: 0,
	firstName: '',
	lastName: '',
	email: '',
	username: '',
	image: '',
};

const userReducerObject = (state: UserState, action: UserTypeAction) => ({
	['LOGIN']: state
});

export const userReducer = (state: UserState, action: UserTypeAction) => {
	return userReducerObject(state, action)[action.type] || state;
};
