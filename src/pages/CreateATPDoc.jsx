// CreateATPDoc.jsx
import React from 'react';
import ATPForm from '../components/ATPForm';
import Table from '../components/Table';
import Button from '../components/Button';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const CreateATPDoc = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <Navbar />
            <br />

            <div className='flex card px-6 py-6 shadow-lg items-center'>
                <div className="card-body p-4">
                    <div className='flex items-start'>
                        <input
                            type="text"
                            placeholder="ATP Name"
                            className="input input-bordered w-full max-w-xs font-bold "
                            onFocus={() => setIsActive(true)}
                            onBlur={() => setIsActive(false)}
                        />

                        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                            Save
                        </button>
                    </div>

                    <br />
                    <div>
                        <ATPForm button1={"Add"} button2={"Clear"} />
                    </div>
                </div>
            </div>
            <div className='flex card w-full py-10 text-primary-content rounded-md shadow-md '>
                <div className="card-body text-black ">
                    <h2 className="card-title text-black">ATP Document</h2>
                    <div className='flex justify-end p-3'>
                        <Button>Download</Button>
                        <Button>Delete</Button>
                    </div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default CreateATPDoc;