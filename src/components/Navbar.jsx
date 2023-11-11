import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-100 px-4">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">ATP Walah</Link>
            </div>
            <div className="flex-none">
                {/* My Account */}
                <Link to="/my-account" className="btn btn-ghost btn-circle">
                    <FaUser className="text-xl" />
                </Link>

                {/* Documents */}
                <Link to="/documents" className="btn btn-ghost btn-circle">
                    <FaFileAlt className="text-xl" />
                </Link>

                {/* Logout */}
                <Link to="/logout" className="btn btn-ghost btn-circle">
                    <FaSignOutAlt className="text-xl" />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
