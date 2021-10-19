import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, about, image } = doctor;
    const doctorIcon = <FontAwesomeIcon icon={faChevronCircleRight} />
    return (
        <div className="col-lg-3 col-sm-6 col-12 bg-color">
            <img className="img-fluid rounded-3 pt-4" src={image} alt="" />
            <h3 className="text-secondary fw-bold">{name}</h3>
            <p className="text-danger fw-bold">{doctorIcon} {about}</p>
        </div>
    );
};

export default Doctor;