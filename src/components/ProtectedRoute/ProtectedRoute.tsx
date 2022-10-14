import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "context/AuthContext/useAuthContext";

import { appRoutes } from "data/appRoutes/appRoutes";

export const ProtectedRoute = () => {
    const { userJwtToken } = useAuthContext();

    if (!userJwtToken) {
        return <Navigate to={appRoutes.shop} />;
    } else return <Outlet />;
};
