/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react"
import { auth } from "../firebase"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //props.history
  // history.push()

  useState(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"))
    // console.log(window.location.href)
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error("Email and password required")
      return
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long")
      return
    }
    try {
      const result = await auth.signInWithEmailLink(email, window.location.href)
      console.log("result", result)
      if (result.user.emailVerified) {
        //remove email from localstorage
        window.localStorage.removeItem("emailForRegistration")
        //get user id token
        let user = auth.currentUser
        await user.updatePassword(password)
        const idTokenResult = await user.getIdTokenResult()
        console.log("user", user, "idoken", idTokenResult)
        //redirect
        history.push("/")
      }
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }
  const completeRegisterForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
          <br />
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
          />
          <br />
          <button type="submit" className="btn btn-outline-primary">
            Complete Registration
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
            <h4>Register Complete</h4>
            <br />
            <ToastContainer />
            {completeRegisterForm()}
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterComplete
