// Table.jsx
import React, { useState, useEffect } from 'react';
import { BiDotsHorizontal, BiEdit, BiTrash } from 'react-icons/bi';
import Modal from './Modal';
import DeleteAlert from './DeleteAlert';

const Table = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.tooltip-container')) {
                setShowTooltip(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleButtonClick = (index, rowData) => {
        setShowTooltip(!showTooltip);
        setSelectedRowIndex(index);
        setModalData(rowData);
    };

    const handleEditClick = () => {
        setShowEditModal(true);
        setShowTooltip(false);
    };

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
        setShowTooltip(false);
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setShowDeleteModal(false);
    };

    const dummyData = [
        {
            tcNo: '1',
            component: 'CM',
            feature: 'Description for TC1',
            testCasePrerequisites: 'CM should be up and running',
            testCaseDescription: 'Pre-requisites for TC1',
            steps: 'Steps for TC1',
            expectedResults: 'Results for TC1',
            status: 'Passed',
            comments: 'NA',
        },
        // Add more data as needed
    ];

    return (
        <div className='flex overflow-x-auto w-full border border-base-300 rounded-lg'>
            <div className="table w-full overflow-hidden relative">
                <table className="table table-zebra">
                    <thead className='bg-slate-50'>
                        <tr className='text-left'>
                            <th>TC.No</th>
                            <th>Component</th>
                            <th>Feature</th>
                            <th>Pre-Requisites</th>
                            <th>Test Case Description</th>
                            <th>Steps</th>
                            <th>Expected Results</th>
                            <th>Status</th>
                            <th>Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((rowData, index) => (
                            <tr key={index}>
                                <th>{rowData.tcNo}</th>
                                <td>{rowData.component}</td>
                                <td>{rowData.feature}</td>
                                <td>{rowData.testCasePrerequisites}</td>
                                <td>{rowData.testCaseDescription}</td>
                                <td>{rowData.steps}</td>
                                <td>{rowData.expectedResults}</td>
                                <td>{rowData.status}</td>
                                <td>{rowData.comments}</td>
                                <td>
                                    <div className="relative inline-block tooltip-container">
                                        <button className="focus:outline-none" onClick={() => handleButtonClick(index, rowData)}>
                                            <BiDotsHorizontal />
                                        </button>
                                        {showTooltip && selectedRowIndex === index && !showEditModal && (
                                            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg p-2 z-50">
                                                <button className="flex items-center px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={handleEditClick}>
                                                    <BiEdit className="mr-2" />
                                                    Edit
                                                </button>
                                                <button className="flex items-center px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={handleDeleteClick}>
                                                    <BiTrash className="mr-2" />
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {[...Array(5)].map((_, index) => (
                    <div key={index} style={{ height: '16px' }}></div>
                ))}
            </div>
            {showEditModal && (
                <Modal onClose={handleCloseModal} data={modalData} />
            )}
            {showDeleteModal && (
                <DeleteAlert onClose={handleCloseModal} data={modalData} />
            )}
        </div>
    );
};

export default Table;
