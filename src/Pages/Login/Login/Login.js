import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="border border-info border-2 rounded-3 mt-4 pt-4 mb-5 pb-5 mx-3 px-3">
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
                <p className="login-register py-1 px-3">new to Green Life healthcare? <Link to="/register">Register</Link></p>
                <button onClick={handleGoogleLogin} className="btn btn-info">Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;