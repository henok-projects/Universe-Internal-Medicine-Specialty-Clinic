import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>

            <p>
                Go to Homepage <Link to="/">Home</Link>
            </p>
        </div>
    );
};

export default PageNotFound;
