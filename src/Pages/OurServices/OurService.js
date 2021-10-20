import { faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OurService = ({ ourService }) => {
    const { key, name, about, price, image } = ourService;
    const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />
    const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div className="col-lg-4 col-sm-6 col-12 pb-3 bg-color">
            <img className="img-fluid rounded-3 pt-4" src={image} alt="" />
            <h3>{name}</h3>
            <h4 className="text-danger fw-bold">Price: {dollarIcon} {price}</h4>
            <p className="px-5">{about}</p>
            <Link to={`/details/${key}`}>
                <button className="btn btn-info">{infoIcon} Details</button>
            </Link>
        </div>
    );
};

export default OurService;