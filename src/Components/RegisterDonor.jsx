import React from "react"

const RegisterDonor = () => {
  const registerdonor = () => {
    return (
      <form>
        <div className="container">
          <div className="row">
            <div className="col-25">
              <label for="fname">First Name* </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="lname">Last Name* </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="tel-no">Contact Number </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="tel-no"
                name="tel-no"
                placeholder="Enter your Contact Number "
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="State">Current State* </label>
            </div>
            <div className="col-75">
              <select id="State" name="State">
                <option value="new-delhi">Odisha</option>
                <option value="uttar-pradesh">Maharashtra</option>
                <option value="uttarakhand">Kerala </option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="city">City* </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Your last name.."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="b-grp">Blood Group* </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="b-grp"
                name="b-grp"
                placeholder="Enter Your Blood group..."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="subject"> Others </label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Any other detail about the donation, eg- any medication you are taking etc."
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    )
  }

  return (
    <>
      <div className="donor-register">
        <h2>
          <strong>Provide the following details</strong>
        </h2>
        <br />
        <br />
        {registerdonor()}
      </div>
    </>
  )
}

export default RegisterDonor
