/* eslint-disable no-unused-vars */
import React from "react"
import { useState } from "react"
import { auth, googleAuthProvider } from "../firebase"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from "react-redux"
import { async } from "@firebase/util"
import { withRouter } from "react-router-dom"
const Login = ({ history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let dispatch = useDispatch()

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result
        const idTokenResult = await user.getIdTokenResult()

        dispatch({
          type: "Logged_In",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        })
        history.push("/")
      })

      .catch((err) => {
        console.log(err)
        toast.error(err.message)
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await auth.signInWithEmailAndPassword(email, password)
      const { user } = result
      const idTokenResult = await user.getIdTokenResult()

      dispatch({
        type: "Logged_In",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      })
      history.push("/")
    } catch (error) {
      toast.error(error)
    }
  }
  const loginForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br />
          <button
            onClick={handleSubmit}
            type="primary"
            className="btn btn-outline-primary"
            disabled={!email || password.length < 6}
          >
            Login with Email/Password
          </button>
          <br />
        </form>
      </>
    )
  }
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Login</h4>
            <br />
            {loginForm()}
            <br />
            <button
              type="primary"
              className="btn btn-outline-danger"
              onClick={googleLogin}
            >
              Login with Google
            </button>
            <br />
            <br />
            <a href="/register">
              <button type="primary" className="btn btn-outline-success">
                Not A User-Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
