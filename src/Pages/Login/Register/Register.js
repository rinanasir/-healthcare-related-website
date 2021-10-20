import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    const { signInUsingGoogle } = useAuth();

    const handelNameChange = e => {
        setName(e.target.value);
    }

    const hadleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        e.preventDefault();
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="border border-info border-2 rounded-3 mt-4 pt-4 mb-5 pb-5 mx-3 px-3">
                <h2 className="text-primary fw-bold mt-1">Please Register</h2>
                <div className="my-4">
                    <form onSubmit={handleRegistration}>
                        <input onBlur={handelNameChange} type="text" placeholder="Your Name" required />
                        <br />
                        <br />
                        <input onBlur={hadleEmailChange} type="email" name="" id="" placeholder="Your Email" required />
                        <br />
                        <br />
                        <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" required />
                        <br />
                        <br />
                        <div className="text-danger">{error}</div>
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