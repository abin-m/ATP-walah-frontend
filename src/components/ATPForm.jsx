// ATPForm.jsx
import React, { useState } from 'react';
import Button from './Button';

const ATPForm = ({ tcNo, component, feature, testCaseDescription, testCasePrerequisites, steps, expectedResults, status, comments, button1, button2 }) => {
    const [editableData, setEditableData] = useState({
        tcNo,
        component,
        feature,
        testCaseDescription,
        testCasePrerequisites,
        steps,
        expectedResults,
        status,
        comments,
    });

    const handleInputChange = (fieldName, value) => {
        setEditableData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleButton1Click = () => {
        console.log("Editable Data:", editableData);
        // Handle the logic for the first button click (Update or Add)
    };

    const handleButton2Click = () => {
        // Clear all data in the edit form
        setEditableData({
            tcNo: '',
            component: '',
            feature: '',
            testCasePrerequisites: '',
            testCaseDescription: '',
            testCasePrerequisites: '',
            steps: '',
            expectedResults: '',
            status: '',
            comments: '',
        });
    };

    return (
        <div className="space-y-3">
            <div className="flex flex-row flex-wrap gap-9">
                <input
                    type="text"
                    placeholder="TestCase Id"
                    className="input input-bordered input-md input-primary w-full max-w-xs"
                    value={editableData.tcNo}
                    onChange={(e) => handleInputChange('tcNo', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Feature"
                    className="input input-bordered input-md input-primary w-full max-w-screen-md"
                    value={editableData.feature}
                    onChange={(e) => handleInputChange('feature', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Component"
                    className="input input-bordered input-md input-primary w-full max-w-xs"
                    value={editableData.component}
                    onChange={(e) => handleInputChange('component', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="TestCase Description"
                    className="input input-bordered input-md input-primary w-full max-w-screen-md"
                    value={editableData.testCaseDescription}
                    onChange={(e) => handleInputChange('testCaseDescription', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="TestCase Pre-Requisites"
                    className="input input-bordered input-md input-primary w-full max-w-xs"
                    value={editableData.testCasePrerequisites}
                    onChange={(e) => handleInputChange('testCasePrerequisites', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Expected Results"
                    className="input input-bordered input-md input-primary w-full max-w-screen-md"
                    value={editableData.expectedResults}
                    onChange={(e) => handleInputChange('expectedResults', e.target.value)}
                />
            </div>
            <div className="flex flex-row flex-nowrap gap-9">
                <textarea
                    className="textarea textarea-primary w-full max-w-3xl"
                    placeholder="Steps"
                    value={editableData.steps}
                    onChange={(e) => handleInputChange('steps', e.target.value)}
                ></textarea>
                <div className="flex-col space-y-2">
                    <input
                        type="text"
                        placeholder="Status"
                        className="input input-bordered input-md input-primary w-full max-w-xs"
                        value={editableData.status}
                        onChange={(e) => handleInputChange('status', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Comments"
                        className="input input-bordered input-md input-primary w-full max-w-xs"
                        value={editableData.comments}
                        onChange={(e) => handleInputChange('comments', e.target.value)}
                    />
                </div>
                <div className='justify-end pe-15 space-y-2'>
                    <Button onClick={handleButton1Click}>{button1}</Button>
                    <Button onClick={handleButton2Click}>{button2}</Button>
                </div>
            </div>
        </div>
    );
};

export default ATPForm;