export interface LoginModel {
    username: string;
    password: string;
}

export interface RegisterModel{
    username: string;
    email: string;
    password: string;
}

export interface TokenResponse{
    access: string;
    refresh: string;
}

export interface UserResponse{
    id: number;
    username: string;
    email: string;
}

export interface ResponseAuth{
    user: UserResponse;
    token: TokenResponse;
}