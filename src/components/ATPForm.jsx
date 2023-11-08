import React from 'react';
import Button from './Button';

const ATPForm = ({ button1, button2 }) => {
    return (
        <div className="space-y-3 ">
            <div className="flex flex-row flex-wrap gap-9 ">
                <input type="text" placeholder="TestCase Id" className="input input-bordered input-md input-primary w-full max-w-xs" />
                <input type="text" placeholder="Feature" className="input input-bordered input-md input-primary w-full max-w-screen-md" />
                <input type="text" placeholder="Component" className="input input-bordered input-md input-primary w-full max-w-xs" />
                <input type="text" placeholder="TestCase Description" className="input input-bordered input-md input-primary w-full max-w-screen-md" />
                <input type="text" placeholder="TestCase Pre-Requisites" className="input input-bordered input-md input-primary w-full max-w-xs" />
                <input type="text" placeholder="Expected Results" className="input input-bordered input-md input-primary w-full max-w-screen-md" />
            </div>
            <div className="flex flex-row  flex-nowrap gap-9 ">

                <textarea className="textarea textarea-primary w-full max-w-3xl" placeholder="Steps"></textarea>

                <div className="flex-col space-y-2">
                    <input type="text" placeholder="Status" className="input input-bordered input-md input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Comments" className="input input-bordered input-md input-primary w-full max-w-xs" />
                </div>
                <div className='justify-end pe-15 space-y-2'>
                    <Button>{button1}</Button>
                    <Button>{button2}</Button>


                </div>
            </div>

        </div>
    );
};

export default ATPForm;