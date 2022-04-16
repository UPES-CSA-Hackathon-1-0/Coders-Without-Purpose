import React from "react"
import Nav from "./Nav"

const RegisterDonor = () => {
  return (
    <>
      <div classNameName="queries">
        <br />
        <h2>Blood Requests Available</h2>
        <br />
        <div className="card">
          <div className="card-header">Anurag Yadav</div>
          <div className="card-body">
            <h5 className="card-title">Blood Group: B+</h5>
            <p className="card-text">
              Urgent Need of Blood at Bareily,Uttar Pradesh
            </p>
            <p>Contact No - 9958255251</p>
            <a href="#" className="btn btn-primary">
              Donate
            </a>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-header">Aditya Awasthi</div>
          <div className="card-body">
            <h5 className="card-title">Blood Group: AB+</h5>
            <p className="card-text">
              Urgent Need of Blood at Jaipur,Rajasthan
            </p>
            <p>Contact No - 6396932731</p>
            <a href="#" className="btn btn-primary">
              Donate
            </a>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-header">Gautam Gupta</div>
          <div className="card-body">
            <h5 className="card-title">Blood Group: O+</h5>
            <p className="card-text">
              Urgent Need of Blood at Dehradun,Uttrakhand
            </p>
            <p>Contact No - 9999624561</p>
            <a href="#" className="btn btn-primary">
              Donate
            </a>
          </div>
        </div>
        <br />
        <div className="card">
          <div className="card-header">Sanchit Jain</div>
          <div className="card-body">
            <h5 className="card-title">Blood Group: O-</h5>
            <p className="card-text">
              Urgent Need of Blood at Lucknow,Uttar Pradesh
            </p>
            <p>Contact No - 9999626745</p>
            <a href="#" className="btn btn-primary">
              Donate
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterDonor
