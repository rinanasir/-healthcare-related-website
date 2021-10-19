import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../images/error.jpg'

const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <h1 className="text-danger fw-bold fs-1">404</h1>
            <h1 className="text-danger fw-bold fs-1">Page Not Found</h1>
            <button className="btn btn-info"><Link to="/">Home</Link></button>
        </div>
    );
};

export default NotFound;