import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className="text-primary fw-bold mt-1">Please Login</h2>
            <div className="my-4">
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <br />
                    <input className="btn btn-info" type="submit" value="Submit" />
                </form>
            </div>
            <p>new to green life healthcare? <Link to="/register">Register</Link></p>
            <button onClick={signInUsingGoogle} className="btn btn-info">Sign In With Google</button>
        </div>
    );
};

export default Login;