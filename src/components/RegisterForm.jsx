import React, { useState } from 'react';
import Register from '../static/Register.svg';
import { Link } from 'react-router-dom';
const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
            alert('All fields are required.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Form submitted successfully!');
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="card lg:card-side bg-base-100 shadow-xl h-[510px] p-3">
                <figure>
                    <img src={Register} alt="Register" className="w-full h-full p-20 object-cover" />
                </figure>
                <div className="border-l-1 mx-4 h-full border bg-slate-500"></div>
                <div className="card-body mt-4 ml-4">
                    <h2 className="card-title mb-7">Register Account</h2>

                    <form onSubmit={handleSubmit}>
                        {['username', 'email', 'password', 'confirmPassword'].map((field, index) => (
                            <div key={index} className="mb-4">
                                <input
                                    type={index === 0 ? 'text' : 'password'}
                                    name={field}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="input input-bordered input-md input-primary w-full max-w-xs"
                                />
                            </div>
                        ))}

                        <div className="card-actions mt-8">
                            <button type="submit" className="btn btn-wide bg-indigo-700 text-white">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-5">
                        <Link to="/login" className="  font-light text-gray-600 hover:underline cursor-pointer">
                            Already have an Account? Login now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
