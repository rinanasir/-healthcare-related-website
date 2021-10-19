import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div>
            <h1 className="text-primary fw-bold mt-5 pt-5">Meet Our Doctors</h1>
            <div className="row mx-5 px-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;