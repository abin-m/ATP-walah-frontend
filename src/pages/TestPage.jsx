import React from 'react'
import ClientCard from '../components/ClientCard'
import ATPForm from '../components/ATPForm'
import Table from '../components/Table'
const TestPage = () => {
    return (
        <div className='space-y-8'>
            <ClientCard />
            <div >
                <hr />
            </div>
            <ATPForm />
            <hr />
            <Table />
        </div>
    )
}

export default TestPage