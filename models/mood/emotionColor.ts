export interface EmotionColor {
    HAPPY: string;
    NORMAL: string;
    ANGRY: string;
    TIRED: string;
    SAD: string;
    CONFUSED: string;
    STRESSED: string;

    [key: string]: string;
}

export interface TimeLine {
    startHour: string;
    endHour: string;
    mood: string;
}

export type Segment = {
    color: string;
    startPercent: number;
    width: number;
    content: string;
};