import React from 'react'

const Table = () => {
    return (
        <div className='flexoverflow-x-auto w-full border border-base-300 rounded-lg'>
            <div className="table w-full overflow-hidden ">
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>CM</td>
                            <td>Description for TC1</td>
                            <td>Pre-requisites for TC1</td>
                            <td>Steps for TC1</td>
                            <td>Results for TC1</td>
                            <td>Passed</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>1</th>
                            <td>CM</td>
                            <td>Description for TC1</td>
                            <td>Pre-requisites for TC1</td>
                            <td>Steps for TC1</td>
                            <td>Results for TC1</td>
                            <td>Passed</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>1</th>
                            <td>CM</td>
                            <td>Description for TC1</td>
                            <td>Pre-requisites for TC1</td>
                            <td>Steps for TC1</td>
                            <td>Results for TC1</td>
                            <td>Passed</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>CM</td>
                            <td>Description for TC1</td>
                            <td>Pre-requisites for TC1</td>
                            <td>Steps for TC1</td>
                            <td>Results for TC1</td>
                            <td>Passed</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>CM</td>
                            <td>Description for TC1</td>
                            <td>Pre-requisites for TC1</td>
                            <td>Steps for TC1</td>
                            <td>Results for TC1</td>
                            <td>Passed</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
