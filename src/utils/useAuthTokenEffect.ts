import { useEffect } from "react";

const useAuthTokenEffect = (props:any) => {
    useEffect(() => {
        const authToken = localStorage.getItem("token");
        if (authToken) {
            props("/hospital-management");
        }
    }, [props]); // Include props in the dependency array
};

export default useAuthTokenEffect;
