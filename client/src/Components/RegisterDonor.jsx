/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Nav from "./Nav"
import axios from "axios"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, RecaptchaVerifier } from "firebase/auth"
const RegisterDonor = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/data/get-data")
      .then((res) => {
        setUsers(res.data.result)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <div className="queries">
        <br />
        <button className="register btn btn-outline-danger">
          Indivisual Donors
        </button>
        <a href="/bloodbank">
          <button className="register btn btn-outline-info">Blood Banks</button>
        </a>

        <h2>Blood Requests Available</h2>
        <br />
        {users.map((user, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                <h5 className="card-title">Blood Group: {user.group}</h5>
                <p className="card-text">
                  Urgent Need of Blood at {user.City} , {user.state}
                </p>
                <p>Contact No - {user.phone}</p>
                <label></label>
                <a href="/validate">
                  <button className="btn btn-primary">Donate</button>
                </a>
              </div>
              <br />
            </div>
          )
        })}
        <br />
      </div>
    </>
  )
}

export default RegisterDonor
