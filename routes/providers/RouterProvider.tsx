import {ReactNode} from "react";
import {routes} from "../index.ts";
import {
    createBrowserRouter,
    RouterProvider as ReactRouterProvider
} from "react-router-dom";
import {ErrorPage, Layaut, Login, Register} from "../../pages";
import PublicRoutes from "./PublicRoutes.tsx";
import PrivateRoutes from "./PrivateRoutes.tsx";
import Summary from "../../pages/summary";
import RecordMoodPage from "../../pages/recordMoodPage/RecordMoodPage.tsx";

import HomePage from "../../pages/homePage/HomePage.tsx";
import DiaryPage from "../../pages/DiaryPage/DiaryPage.tsx";
import ReportPage from "../../pages/ReportPage/ReportPage.tsx";



type Route = {
    path: string;
    element: ReactNode;
};

type RoutesArray = Route[];

const USER_ROUTES: RoutesArray = [
    {
        path: routes.USER.MOOD,
        element: (
            <PrivateRoutes rol={"USER"}>
                < RecordMoodPage />
            </PrivateRoutes>
        )
    },
    {
        path: routes.USER.MIRESUMEN,
        element: (
            <PrivateRoutes rol={"USER"}>
                <Summary />
            </PrivateRoutes>
        )
    },
    {
        path: routes.USER.NOTAS,
        element: (
            <PrivateRoutes rol={"USER"}>
                <DiaryPage />
            </PrivateRoutes>
        )
    },
    {
        path: routes.USER.REPORTES,
        element: (
            <PrivateRoutes rol={"USER"}>
                <ReportPage/>
            </PrivateRoutes>
        )
    }
]

const router = createBrowserRouter([{
    path: routes.HOME,
    element: <Layaut />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: routes.HOME,
            element: (
                <HomePage />
            )
        },
        {
            path: routes.SIGN_UP,
            element: (
                <PublicRoutes>
                    <Register />
                </PublicRoutes>
            )
        },
        {
          path: routes.LOGIN,
            element: (
                <PublicRoutes>
                    <Login />
                </PublicRoutes>
            )
        },
        ...USER_ROUTES
    ]
}])

const routerProvider = () => <ReactRouterProvider router={router} />

export default routerProvider;
