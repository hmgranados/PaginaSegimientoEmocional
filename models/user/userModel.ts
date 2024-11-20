import {JwtPayload} from "jwt-decode";

export interface UserModel{
    id: number;
    name: string;
    email: string;
    role: {id: number, name: 'USER'};
}

export interface userBackend extends JwtPayload{
    jti: string;
    role: {id: number, name: 'USER'};
    sub: string;
    username: string
}