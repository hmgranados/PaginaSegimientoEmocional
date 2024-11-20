type Routes = {
    HOME: string;
    SIGN_UP: string;
    LOGIN: string;
    USER: { 
        MOOD: string;
        MIRESUMEN: string;
        NOTAS: string;
        REPORTES: string;
    };
};

const routes: Readonly<Routes> = Object.freeze({
    HOME: "/",
    SIGN_UP: "/register",
    LOGIN: "/login",
    USER: Object.freeze({
        MOOD: "/mood",
        MIRESUMEN: "/resumen",
        NOTAS: "/notas",
        REPORTES: "/reportes",
    }),
});

export default routes;