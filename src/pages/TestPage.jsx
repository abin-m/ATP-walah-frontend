import React from 'react'
import ClientCard from '../components/ClientCard'
import ATPForm from '../components/ATPForm'
import Table from '../components/Table'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
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
            <hr />
            <RegisterForm />

        </div>
    )
}

export default TestPage