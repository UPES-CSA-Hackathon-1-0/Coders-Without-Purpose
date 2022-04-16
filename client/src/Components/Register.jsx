/* eslint-disable no-unused-vars */
import React from "react"
import { useState } from "react"
import { auth } from "../firebase"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Register = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    }

    await auth.sendSignInLinkToEmail(email, config)
    toast.success(
      `Email is sent to ${email}. Click link to complete registration`
    )

    //save email in localstorage
    window.localStorage.setItem("emailForRegistration", email)
    //clear state
    setEmail("")
  }
  const registerForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <br />
          <button type="submit" className="btn btn-outline-primary">
            Register
          </button>
        </form>
      </>
    )
  }
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Register</h4>
            <ToastContainer />
            {registerForm()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Register