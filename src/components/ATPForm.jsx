import React from 'react';

const ATPForm = () => {
    return (
        <div className="space-y-6 ">
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
                    <button className="btn bg-green-700  w-32 text-white ">Save </button>
                    <button className="btn  bg-orange-300 w-32">Cancel</button>

                </div>
            </div>

        </div>
    );
};

export default ATPForm;

