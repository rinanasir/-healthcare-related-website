import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(result => result.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div id="doctors">
            <h1 className="text-primary fw-bold mt-5">Meet Our Doctors</h1>
            <div className="row mx-5 px-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;