import React, { useState, useEffect } from 'react';
import { BiDotsHorizontal, BiEdit, BiTrash } from 'react-icons/bi';
import Modal from './Modal';
import DeleteAlert from './DeleteAlert';

const Table = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

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

    const handleButtonClick = (index) => {
        setShowTooltip(!showTooltip);
        setSelectedRowIndex(index);
    };

    const handleEditClick = () => {
        setShowEditModal(true);
        setShowTooltip(false); // Close tooltip when opening the modal
    };
    const handleDeleteClick = () => {
        setShowDeleteModal(true);
        setShowTooltip(false); // Close tooltip when opening the modal
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setShowDeleteModal(false);
    };

    return (
        <div className='flex overflow-x-auto w-full border border-base-300 rounded-lg'>
            <div className="table w-full overflow-hidden relative">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className=' bg-slate-50'>
                        <tr className='text-left'>
                            <th>TC.No</th>
                            <th>Component</th>
                            <th>Feature</th>
                            <th>Test Case Description</th>
                            <th>Test Case Pre-requisites</th>
                            <th>Steps</th>
                            <th>Expected Results</th>
                            <th>Status</th>
                            <th>Comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(5)].map((_, index) => (
                            <tr key={index}>
                                <th>1</th>
                                <td>CM</td>
                                <td>Description for TC1</td>
                                <td>Pre-requisites for TC1</td>
                                <td>Steps for TC1</td>
                                <td>Results for TC1</td>
                                <td>Passed</td>
                                <td>NA</td>
                                <td>NA</td>
                                <td>
                                    <div className="relative inline-block tooltip-container">
                                        <button className="focus:outline-none" onClick={() => handleButtonClick(index)}>
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
                {/* Add 5 empty rows for extra space */}
                {[...Array(5)].map((_, index) => (
                    <div key={index} style={{ height: '16px' }}></div>
                ))}
            </div>
            {showEditModal && (
                <Modal onClose={handleCloseModal} data={"Hi"} />
            )}
            {showDeleteModal && (
                <DeleteAlert onClose={handleCloseModal} data={"Hi"} />
            )}
        </div>
    );
};

export default Table;
