/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const Dashboard = () => {
  return (
    <>
      <br />
      <h2>Donors Available for your request</h2>
      <br />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Donor Name</h5>
          <h6 className="card-subtitle mb-2 text-muted">Donor Blood Group</h6>
          <p className="card-text">Details about the donor,his location etc</p>
          <a href="#" className="card-link">
            Email
          </a>
          <a href="#" className="card-link">
            Contact Number
          </a>
        </div>
      </div>
    </>
  )
}

export default Dashboard
