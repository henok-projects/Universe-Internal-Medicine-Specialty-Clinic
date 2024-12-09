import { RootState } from "@/store/store";
import React, { useEffect, useState, useCallback, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props{
    roles: string[]
}
const PrivateRoute: React.FC<PropsWithChildren<Props>> = ({roles, children}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {user} = useSelector((state: RootState) => state.auth);

    const checkUserToken = useCallback(() => {
        const userToken = localStorage.getItem('token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        if(!roles.includes(user.role)){
          return navigate("/unauthorized")   
        }
        setIsLoggedIn(true);
    }, [navigate]);
    useEffect(() => {

        checkUserToken();
    }, [checkUserToken]);
    return (React.createElement(React.Fragment, null, isLoggedIn ? children : null));
};
export default PrivateRoute;
