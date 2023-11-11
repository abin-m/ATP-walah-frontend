import React from 'react';
import Navbar from '../components/Navbar';

const ViewAllATP = () => {
    // Dummy ATP data
    const atpData = [
        { id: 1, name: 'ATP-001', description: 'Description for ATP-001' },
        { id: 2, name: 'ATP-002', description: 'Description for ATP-002' },
        { id: 3, name: 'ATP-003', description: 'Description for ATP-003' },
        { id: 4, name: 'ATP-004', description: 'Description for ATP-004' },
        { id: 5, name: 'ATP-005', description: 'Description for ATP-005' },
    ];

    return (
        <div className='mx-auto'>
            <Navbar />
            <div className=' p-10'>
                <h2 className="card-title text-black  space-y-5 mb-10">Your Documents</h2>
                <div className="table mx-auto p-8 overflow-hidden relative border border-base-300 rounded-lg">

                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead className='bg-slate-50'>
                            <tr className='text-left'>
                                <th className="w-0/3">No.</th>
                                <th className="w-1/3">ATP Name</th>
                                <th className="w-1/3">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {atpData.map((atp, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{atp.name}</td>
                                    <td>{atp.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Add 5 empty rows for extra space */}
                    {[...Array(5)].map((_, index) => (
                        <div key={index} style={{ height: '16px' }}></div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default ViewAllATP;
