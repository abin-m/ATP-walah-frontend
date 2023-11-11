import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import Hero from '../static/Hero.svg';

const Dashboard = () => {
    return (
        <div data-theme="light">
            <Navbar />

            <HeroSection />

            <div className="flex flex-row gap-5 mt-10 p-8">
                <FeatureCard
                    image={Hero}
                    title="Let's do it!"
                    description="If a dog chews shoes whose shoes does he choose?"
                    actionText="Create ATP"
                />

                <FeatureCard
                    image={Hero}
                    title="Your documents"
                    description="If a dog chews shoes whose shoes does he choose?"
                    actionText="View all"
                />

                <FeatureCard
                    image={Hero}
                    title="Shared documents"
                    description="If a dog chews shoes whose shoes does he choose?"
                    actionText="View all"
                />
            </div>
        </div>
    );
}

export default Dashboard;
