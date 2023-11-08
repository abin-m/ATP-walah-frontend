import React from 'react'

const ClientCard = () => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row"> {/* Use flex-col for mobile and flex-row for larger screens */}
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0"> {/* Adjust paddings and margins */}
              <h2 className="card-title">Client Details</h2>
              <p>Name: John Doe</p>
              <p>Company: ABC Corporation</p>
              {/* Add more client details here */}
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-4 border-t md:border-t-0 border-l"> {/* Adjust paddings and borders */}
              <h2 className="card-title">Contact Information</h2>
              <p>Email: john@example.com</p>
              <p>Phone: +123 456 7890</p>
              {/* Add more contact information here */}
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default ClientCard
