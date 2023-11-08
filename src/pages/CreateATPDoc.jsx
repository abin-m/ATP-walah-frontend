import React from 'react'
import person from '../static/Person.svg'
import ATPForm from '../components/ATPForm'
import Table from '../components/Table'
import Button from '../components/Button'
import { useState } from 'react'
const CreateATPDoc = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <div className="navbar bg-slate-100 px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">ATP Walah</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="badge badge-sm indicator-item">1</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={person} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />

            <div className=' flex card   px-6  py-6   shadow-lg items-center '>
                <div className="card-body p-4">
                    <div className='flex items-start'>
                        <input type="text" placeholder="ATP Name" className="input input-bordered w-full max-w-xs  font-bold " onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)} />

                        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
                            Re-Name
                        </button>
                    </div>




                    <br />
                    <div>
                        <ATPForm button1={"Add"} button2={"Clear"} />
                    </div>

                </div>

            </div>
            <div className=' flex card w-full  py-10 text-primary-content rounded-md  shadow-md '>
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
    )
}

export default CreateATPDoc
