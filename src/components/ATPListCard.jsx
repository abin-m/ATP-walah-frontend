import React from 'react';

const ATPListCard = ({ atp }) => {
    return (
        <div className="card w-64 h-40 bg-base-200 shadow-xl m-4">
            <div className="card-body text-center">
                <h2 className="card-title text-lg font-semibold">{atp.tcNo}</h2>
                <p className="text-sm text-gray-600 text-start">{atp.testCaseDescription}</p>
                {/* Additional details or actions can be added here */}
            </div>
        </div>
    );
}

export default ATPListCard;
