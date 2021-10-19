import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle } = useAuth();


    const hadleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {

        e.preventDefault();
    }

    return (
        <div>
            <div>
                <h2 className="text-primary fw-bold mt-1">Please Register</h2>
                <div className="my-4">
                    <form onSubmit={handleRegistration}>
                        <input onBlur={hadleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <br />
                        <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <br />
                        <input className="btn btn-info" type="button" value="Submit" />
                    </form>
                </div>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <button onClick={signInUsingGoogle} className="btn btn-info">Sign In With Google</button>
            </div>
        </div>
    );
};

export default Register;