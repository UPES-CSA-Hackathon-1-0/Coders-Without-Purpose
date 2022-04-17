import React from "react"

const Footer = () => {
  return (
    <>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Blood Donation</a>
                  </li>
                  <li>
                    <a href="#">Blood Request</a>
                  </li>
                  <li>
                    <a href="#">Emergency Blood Need</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>BLOOD LINK</h3>
                <p>
                  Blood Donation Is A Small Act Of Kindness That Does Great And
                  Big Wonders
                </p>
              </div>
              <div className="col item social">
                <a href="#">
                  <i className="icon ion-social-facebook"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-instagram"></i>
                </a>
              </div>
            </div>
            <p className="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>
  )
}

export default Footer
