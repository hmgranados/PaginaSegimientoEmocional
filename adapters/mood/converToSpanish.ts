
export const convertMoodDayInSpanish = (mood: string) => {
    switch (mood) {
        case 'HAPPY':
            return 'Feliz';
        case 'SAD':
            return 'Triste';
        case 'ANGRY':
            return 'Enojado';
        case 'TIRED':
            return 'Cansado';
        case 'STRESSED':
            return 'Estresado';
        case 'CONFUSED':
            return 'Confundido';
        default:
            return 'Normal';
    }
}