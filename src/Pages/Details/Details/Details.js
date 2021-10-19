import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceKey } = useParams();
    return (
        <div>
            <h2>Welcome to service {serviceKey}</h2>
        </div>
    );
};

export default Details;