/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { React, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import AvailableHospitals from "./Components/AvailableHospitals"

import FindDonor from "./Components/FindDonor"
import HospitalsDetails from "./Components/HospitalsDetails"
import Login from "./Components/Login"
import Register from "./Components/Register"
import RegisterDonor from "./Components/RegisterDonor"
import Dashboard from "./Components/Dashboard"
import Nav from "./Components/Nav"
import Error from "./Components/Error"
import { initializeApp } from "firebase/app"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import RegisterComplete from "./Components/RegisterComplete"
import { auth } from "./firebase"
import { useDispatch } from "react-redux"
import { async } from "@firebase/util"
const App = () => {
  const dispatch = useDispatch()

  //to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()
        dispatch({
          type: "Logged_In",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        })
      }
    })
    return () => unsubscribe()
  }, [])
  return (
    <>
      <Nav />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register-donor" component={RegisterDonor} />
        <Route exact path="/donor-find" component={FindDonor} />
        <Route
          exact
          path="/available-hospitals"
          component={AvailableHospitals}
        />
        <Route exact path="/hospitals-details" component={HospitalsDetails} />

        <Route component={Error} />
      </Switch>
    </>
  )
}
export default App
