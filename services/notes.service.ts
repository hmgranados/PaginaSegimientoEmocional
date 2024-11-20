import {Note, SaveNote, UpdateNote} from "../models/notes";
import axios, {AxiosResponse} from "axios";

export const saveNote = async (note: SaveNote): Promise<AxiosResponse<Note>> => {
    return await axios.post("/diaryEntry", note);
}

export const updateNote = async (note: UpdateNote): Promise<AxiosResponse<Note>> => {
    return await axios.put("/diaryEntry/update", note);
}

export const getNotes = async (userId: number): Promise<AxiosResponse<Note[]>> => {
    return await axios.get(`/diaryEntry/user/${userId}`);
}

export const deleteNote = async (noteId: number) => {
    return await axios.delete(`/diaryEntry/${noteId}`);
}