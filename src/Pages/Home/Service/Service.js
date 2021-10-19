import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { key, name, about, price, image } = service;
    const detailIcon = <FontAwesomeIcon icon={faInfoCircle} />
    return (
        <div className="col-lg-4 col-sm-6 col-12 pb-3 bg-color">
            <img className="img-fluid rounded-3 pt-4" src={image} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">Price: {price}</h5>
            <p className="px-5">{about}</p>
            <Link to={`/details/${key}`}>
                <button className="btn btn-info">{detailIcon} Details</button>
            </Link>
        </div>
    );
};

export default Service;