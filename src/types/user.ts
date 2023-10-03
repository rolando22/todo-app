export interface UserLogin {
    email: string
    password: string
}

export interface UserState {
    id: number
    firstName: string
    lastName: string
    email: string
    username: string
    image: string
    token: string
}

export type UserTypeAction = 
    | { type: 'LOGIN', payload: UserState }
    | { type: 'LOGOUT', payload: null }
