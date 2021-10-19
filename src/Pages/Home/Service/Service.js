import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, about, price, image } = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 bg-color">
            <img className="img-fluid rounded-3 pt-4" src={image} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-5">{about}</p>
        </div>
    );
};

export default Service;