import type { UserState, UserTypeAction } from '../types/user';

export const userInitialState: UserState = {
	id: 0,
	firstName: '',
	lastName: '',
	email: '',
	username: '',
	image: '',
	token: '',
};

const userReducerObject = (_state: UserState, action: UserTypeAction) => ({
	['LOGIN']: action.payload, 
	['LOGOUT']: userInitialState,
});

export const userReducer = (state: UserState, action: UserTypeAction) => {
	return userReducerObject(state, action)[action.type] || state;
};
