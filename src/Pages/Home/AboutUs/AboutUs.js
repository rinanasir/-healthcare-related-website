import React from 'react';
import banner from '../../../images/banner-2.png'
import Footer from '../../Shared/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={banner} alt="" />
            <h1 className="text-primary fw-bold mt-1">About US</h1>
            <div className="mt-1 mx-4 px-4">
                <h2>We are a leading private healthcare provider, delivering value-based care and clinical best practice.</h2>
            </div>
            <div className=" container mt-1 mx=5 px-5">
                <h5>Healthe Care is the on the way to becaome the largest private hospital operator. We employ 7,000 people and operate a portfolio of 34 private healthcare facilities.</h5>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;