/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Nav from "./Nav"
import axios from "axios"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
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

  const handeClick = (e) => {
    e.preventDefault()
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha")
    let number = this.user.phone
    console.log(number)
    number = "+91" + number
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        let code = prompt("Enter the OTP", "")
        if (code == null) return
        e.confirm(code)
          .then(function (result) {
            console.log(result.user, "user")
            document.querySelector("label").textContent =
              "Blood Donated Successfully"
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }

  return (
    <>
      <div className="queries">
        <br />
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
                <button className="btn btn-primary" onClick={handeClick}>
                  Donate
                </button>
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
