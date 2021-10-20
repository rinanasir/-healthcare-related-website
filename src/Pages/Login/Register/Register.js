import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const { signInUsingGoogle } = useAuth();


    const hadleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
            })
        e.preventDefault();
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="border border-info border-2 rounded-3 mt-4 pt-4 mb-5 pb-5 mx-3 px-3">
                <h2 className="text-primary fw-bold mt-1">Please Register</h2>
                <div className="my-4">
                    <form onSubmit={handleRegistration}>
                        <input type="text" placeholder="Your Name" />
                        <br />
                        <br />
                        <input onBlur={hadleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <br />
                        <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <br />
                        <input className="btn btn-info" type="button" value="Submit" />
                    </form>
                </div>
                <p className="login-register py-1 px-3">Already have an account? <Link to="/login">Login</Link></p>
                <button onClick={signInUsingGoogle} className="btn btn-info">Sign In With Google</button>
            </div>
        </div>
    );
};

export default Register;