type Role = 'user' | 'admin'

export interface User {
    id: string
    roles: Role[]
    name: string
    email: string
    avatar: string
    phone: string
    date_of_birth: string
    created_at: string
    updated_at: string
}

export interface LoginData {
    user: User
    accessToken: string
}
