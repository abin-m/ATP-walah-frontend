import React from 'react';
import ATPForm from './ATPForm';
import Button from './Button';

const Modal = ({ onClose, data }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-4 rounded-md shadow-md">
                <h2 className="card-title text-black px-5">Update TestCase</h2>
                {/* Display your data or input fields here */}
                <div className=' p-8'>
                    <ATPForm button1={"update"} button2={"Clear"} />
                </div>
                <div className='px-5'>
                    <Button onclickHandler={onClose}>{"Close"}</Button>
                </div>

                {/* Additional buttons or actions */}
            </div>
        </div>
        // <div className="modal">
        //     <div className="modal-box">
        //         <h3 className="font-bold text-lg">Hello!</h3>
        //         <p className="py-4">This modal works with a hidden checkbox!</p>
        //         <div className="modal-action">
        //             <button>Close</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Modal;