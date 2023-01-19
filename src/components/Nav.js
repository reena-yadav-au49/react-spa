import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="header">
            <Link to="/" exact >
                <li>Home</li>
            </Link>

            <Link to="./view-customers" exact >
            <li>View Customers</li>
            </Link>

            <Link to="/register-customer"exact>
            <li>Register Customers</li>
            </Link>
        </ul>
    );
};
export default Nav ;