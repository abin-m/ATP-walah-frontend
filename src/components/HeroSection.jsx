import React from 'react';
import DashboardSVG from '../static/Dashboard.svg';

const HeroSection = () => {
    return (
        <div className="flex flex-row pt-10 p-10 justify-between">
            <div className="basis-1/2">
                <h3 className="text-3xl font-sans font-semibold">
                    One Place for <br /> All Your ATP Documents
                </h3>
                <p className="text-lg pt-3 pb-4">
                    Manage your ATP documents efficiently in one centralized location. Streamline your workflow, collaborate seamlessly, and stay organized.
                </p>
            </div>
            <div>
                <img src={DashboardSVG} alt="ATP Dashboard" className="pl-8" />
            </div>
        </div>
    );
}

export default HeroSection;
