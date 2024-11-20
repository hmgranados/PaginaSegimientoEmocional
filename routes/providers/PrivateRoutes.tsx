import * as React from "react";
import {UserModel} from "../../models";
import {useUserStore} from "../../hooks";
import {Navigate} from "react-router-dom";
import routes from "../routes.tsx";

interface PrivateRoutesProps {
    rol: string;
    children: React.ReactNode;
}


const PrivateRoutes: React.FC<PrivateRoutesProps> = ({rol, children}) => {

    const id = Boolean(useUserStore((state: UserModel) => state.id));

    if (rol !== "USER") {
        return <Navigate to={routes.LOGIN} />;
    }
    return id ? children : <Navigate to={routes.LOGIN} />;
}

export default PrivateRoutes;