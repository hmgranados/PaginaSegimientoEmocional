
const daysOfWeekMap: { [key: string]: string } = {
    "Monday": "Lunes",
    "Tuesday": "Martes",
    "Wednesday": "Miércoles",
    "Thursday": "Jueves",
    "Friday": "Viernes",
    "Saturday": "Sábado",
    "Sunday": "Domingo"
};

const monthsMap: { [key: string]: string } = {
    "January": "Enero",
    "February": "Febrero",
    "March": "Marzo",
    "April": "Abril",
    "May": "Mayo",
    "June": "Junio",
    "July": "Julio",
    "August": "Agosto",
    "September": "Septiembre",
    "October": "Octubre",
    "November": "Noviembre",
    "December": "Diciembre"
};

export const convertToSpanish = (input: string): string => {
    const formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return daysOfWeekMap[formattedInput] || monthsMap[formattedInput] || input;
};