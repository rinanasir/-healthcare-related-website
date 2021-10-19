import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, about, image } = doctor
    return (
        <div className="col-lg-3 col-sm-6 col-12 bg-color">
            <img className="img-fluid rounded-3 pt-4" src={image} alt="" />
            <h3 className="text-secondary fw-bold">{name}</h3>
            <p className="text-danger fw-bold">{about}</p>
        </div>
    );
};

export default Doctor;