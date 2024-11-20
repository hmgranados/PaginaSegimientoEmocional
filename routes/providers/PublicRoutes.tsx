import {useUserStore} from "../../hooks";
import {UserModel} from "../../models";
import {Navigate} from "react-router-dom";
import routes from "../routes.tsx";
import * as React from "react";


const PublicRoutes: React.FC<React.PropsWithChildren> = ({children}) => {
    const id = useUserStore((state: UserModel) => state.id);
    
    return id ? <Navigate to={routes.USER.MOOD} /> : <>{children}</>;
}

export default PublicRoutes;