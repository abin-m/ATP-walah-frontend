import React from 'react';
import login from '../static/login.svg';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="card lg:card-side bg-base-100 shadow-xl h-[400px] p-4">
                <figure>
                    <img src={login} alt="Album" className="w-full h-full p-20 object-cover" />
                </figure>
                <div className="border-l-1 mx-4 h-full border bg-slate-500"></div>
                <div className="card-body mt-4 ml-4">
                    <h2 className="card-title mb-7">Login Account</h2>

                    <input type="text" placeholder="username/email" className="input input-bordered input-md input-primary w-full max-w-xs mb-2" />
                    <input type="password" placeholder="Password" className="input input-bordered input-md input-primary w-full max-w-xs mb-4" />

                    <div className="card-actions">
                        <button className="btn btn-wide  bg-indigo-700 text-white">Login</button>
                    </div>
                    <div className="mt-5">
                        <Link to="/register" className="  font-light text-gray-600 hover:underline cursor-pointer">
                            Don't have an Account? Create now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
