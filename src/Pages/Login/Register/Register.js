import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div>
                <h2 className="text-primary fw-bold mt-1">Please Register</h2>
                <div className="my-4">
                    <form onSubmit="">
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <br />
                        <input type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <br />
                        <input type="password" name="" id="" placeholder="Re-enter Password" />
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