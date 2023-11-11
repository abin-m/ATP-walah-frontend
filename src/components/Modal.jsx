import React from 'react';
import ATPForm from './ATPForm';
import Button from './Button';

const Modal = ({ onClose, data }) => {
    const { tcNo, component, feature, testCaseDescription, testCasePrerequisites, steps, expectedResults, status, comments } = data;
    console.log(testCasePrerequisites)
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="card-title text-black px-5">Update TestCase</h2>
                <div className='p-8'>
                    <ATPForm
                        tcNo={tcNo}
                        component={component}
                        feature={feature}
                        testCaseDescription={testCaseDescription}
                        testCasePrerequisites={testCasePrerequisites}
                        steps={steps}
                        expectedResults={expectedResults}
                        status={status}
                        comments={comments}
                        button1={"Update"}
                        button2={"Clear"}
                    />
                </div>
                <div className='px-5'>
                    <Button onClick={onClose}>{"Close"}</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;