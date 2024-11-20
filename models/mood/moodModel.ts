
export interface MoodModel{
    id: number;
    name: string;
}

export interface UserMoodRequest{
    note: string
    moodId: number;
}

export interface UserMoodResponse{
    note: string;
    username: string;
    mood: number;
}

export interface LongestUserMoodResponse{
    moodname: string;
    hours: number;
}