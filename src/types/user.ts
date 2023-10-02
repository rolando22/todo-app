export interface UserLogin {
    username: string
    password: string
}

export interface UserState {
    id: number
    firstName: string
    lastName: string
    email: string
    username: string
    image: string
}

export type UserTypeAction = { type: 'LOGIN', payload: UserLogin }
