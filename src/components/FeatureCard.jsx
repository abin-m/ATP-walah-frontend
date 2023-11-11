import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ image, title, description, actionText }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Navigate to the corresponding page based on actionText
        if (actionText === 'Create ATP') {
            navigate('/create');
        } else if (actionText === 'View all') {
            navigate('/view-all');
        } else {
            // Handle other cases if needed
        }
    };

    return (
        <div className="card w-70 bg-base-200 shadow-xl flex items-center justify-center">
            <div className="card-body text-center">
                <img src={image} alt={title} className="mb-4 w-20 h-20" />
                <h2 className="card-title text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-primary" onClick={handleButtonClick}>
                        {actionText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;
