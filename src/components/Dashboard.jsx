import React from 'react'
import person from '../static/Person.svg'
import CreateAtp from '../static/CreateATP.svg'
import DashboardSVG from '../static/Dashboard.svg'
const Dashboard = () => {
    return (
        <div data-theme="light">

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
            {/* End of navbar */}
            <div class="flex flex-row pt-10 p-10">
                <div class="basis-1/2">
                    <h3 class="text-3xl font-sans font-semibold">One place for All your <br /> ATP documents </h3>
                    <h5 class=" text-xl pt-3 pb-4"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                </div>
                <div>
                    <img class="pl-8" src={DashboardSVG} alt="create atp" />
                </div>
            </div>
            <div class="flex flex-row gap-5 mt-10 p-8 ">
                <div className="card w-96  bg-base-200 shadow-xl">
                    <figure><img src={CreateAtp} alt="create atp" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Let's do it!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Create ATP</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96  bg-base-200 shadow-xl">
                    <figure><img src={CreateAtp} alt="my-docs" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Your documents</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View all</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96  bg-base-200 shadow-xl">
                    <figure><img src={CreateAtp} alt="shared-docs" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">shared documents</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View all</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
