import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found-container d-flex justify-content-center">
            <div>
                <h1 className="not-found text-center text-secondary m-0 p-0">404</h1>
                <h1 className="text-center text-secondary">Page Not Found <i class="far fa-frown-open fs-1"></i></h1>
                <p className="text-center text-secondary fw-bolder mb-5">Something is wrong. Please try again and check your provided url properly </p>
                <p className="text-center"><NavLink to="/home" className="text-center mx-auto w-50" activeClassName="selected">
                    <button className="btn btn-secondary">Home</button>
                </NavLink></p>
            </div>
        </div>
    );
};

export default NotFound;