import React from 'react'
import Button from './Button'

const DeleteAlert = ({ onClose, data }) => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <div className='p-10'>
                        <h2 className="card-title text-black px-5">Are you sure?</h2>
                    </div>
                    <div className='px-5 flex'>
                        <Button onclickHandler={onClose}>{"Yes"}</Button>
                        <Button onclickHandler={onClose}>{"No"}</Button>
                    </div>

                    {/* Additional buttons or actions */}
                </div>
            </div>
        </div>
    )
}

export default DeleteAlert
