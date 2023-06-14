export interface User {
    id: string
    name: string
    email: string
    password: string
    role: number
}

export interface LoginResponse {
    access_token: string
    refresh_token: string
}

export interface AccessTokenResponse {
    token: string
}
