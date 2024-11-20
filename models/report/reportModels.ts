
export interface ReportMonthResponse{
    mood: string;
    hours: number;
    monthName: string;
}

export interface ReportWeekResponse{
    dayWeek: string;
    hoursHappy: number;
    hoursSad: number;
}

export interface ReportMood{
    happyMonth: string;
    tiredDay: string;
    sadDay: string;
}