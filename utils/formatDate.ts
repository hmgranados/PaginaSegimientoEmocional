
export function formatDate(date: Date | string): string {
    if (Array.isArray(date)) {
        date = new Date(
            date[0],
            date[1] - 1,
            date[2],
            date[3],
            date[4],
            date[5],
            Math.floor(date[6] / 1000000)
        );
    } else {
        date = new Date(date);
    }
    const newDate = new Date(date);

    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
}