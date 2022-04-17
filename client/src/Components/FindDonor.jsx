import React from "react"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const FindDonor = () => {
  const history = useHistory()
  const handleClick = async (e) => {
    e.preventDefault()

    const { name, group, phone, state, city } = user

    const res = await fetch("/find-donors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, group, phone, state, city }),
    })

    const result = await res.json()

    if (result.status === 422 || !result) {
      window.alert("Failed Registration")
    } else {
      window.alert("Registered Successfully")
      history.push("/")
    }
  }

  const [user, setUser] = useState({
    name: "",
    phone: "",
    state: "",
    group: "",
    city: "",
  })

  let name, value

  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const findDonor = () => {
    return (
      <form method="post">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
          onChange={handleInputs}
          value={user.name}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="form-control"
          onChange={handleInputs}
          value={user.phone}
        />
        <br />
        <input
          type="text"
          name="group"
          placeholder="Blood Group"
          className="form-control"
          onChange={handleInputs}
          value={user.group}
        />
        <br />
        <input
          type="text"
          name="state"
          placeholder="State"
          className="form-control"
          onChange={handleInputs}
          value={user.state}
        />
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="form-control"
          onChange={handleInputs}
          value={user.city}
        />
        <br />
        <a href="/dashboard">
          <button onClick={handleClick} className="btn btn-outline-primary">
            Submit
          </button>
        </a>
      </form>
    )
  }

  return (
    <>
      <div className="find-donor">
        <h2>
          <strong>Provide the following details</strong>
        </h2>
        <br />
        <br />
        {findDonor()}
      </div>
    </>
  )
}

export default FindDonor
