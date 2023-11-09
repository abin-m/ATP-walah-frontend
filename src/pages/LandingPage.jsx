import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';

import LandingHero from '../static/LandingHero.svg';

const LandingPage = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-white text-2xl font-bold">ATP Walah</Link>
                    <div>
                        <a href="#features" className="text-white mr-4">Features</a>
                        <a href="#about" className="text-white mr-4">About</a>
                        <a href="#contact" className="text-white">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Main Section */}
            <div className="flex items-center justify-center h-screen   bg-blue-500 text-white">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4 mt-8">ATP Walah</h1>
                    <p className="text-lg">One place for all your ATP's</p>
                    <div className="mt-8">
                        <Link to="/register" className="btn btn-primary mr-4">Register Now</Link>
                        <Link to="/login" className="btn btn-secondary">Login Now</Link>
                    </div>
                </div>
                <div>
                    <img src={LandingHero} alt="ATP Walah" className="ml-50 max-h-80" />
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula velit vel turpis auctor, vel malesuada lorem euismod.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula velit vel turpis auctor, vel malesuada lorem euismod.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula velit vel turpis auctor, vel malesuada lorem euismod.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="bg-blue-500 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <p className="text-lg">This is an open-source project. Feel free to reach out!</p>
                    <div className="mt-8">
                        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FaGithub className="mr-2" /> Start on GitHub
                        </a>
                        <a href="https://www.buymeacoffee.com/your-profile" target="_blank" rel="noopener noreferrer" className="btn btn-outline ml-4">
                            <FiCoffee className="mr-2" /> Buy Me Coffee
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
