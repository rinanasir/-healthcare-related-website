import React, { useEffect, useState } from 'react';
import OurService from './OurService';

const OurServices = () => {
    const [ourServices, setOurServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(result => result.json())
            .then(data => setOurServices(data));
    }, [])

    return (
        <div id="services">
            <h1 className="text-primary fw-bold mt-5 mb-3">Services We Provide</h1>
            <div className="row mx-5 px-5 mb-5">
                {
                    ourServices.map(ourService => <OurService
                        key={ourService.key}
                        ourService={ourService}
                    ></OurService>)
                }
            </div>
            <h3 className="text-primary fw-bold mt-5 mb-5">More Services Are Comming Soon....</h3>
        </div>
    );
};

export default OurServices;