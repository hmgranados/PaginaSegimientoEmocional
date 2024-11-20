import {UserResponse} from "../user";

export interface Note {
    id: number;
    title: string;
    description: string
    user: UserResponse;
    createdAt: string;
    updatedAt: string;
}

export interface SaveNote {
    title: string;
    description: string;
}

export interface UpdateNote {
    id: number;
    title: string;
    description: string;
}