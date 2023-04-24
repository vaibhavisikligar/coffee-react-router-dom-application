import React from "react";

function Footer() {
  return (
    <div className="container-fluid footer py-5">
      <div className="container">
        <div className="row py-3">
        <div></div>
          <div className="col-md-3 mb-4 ">
            <div className="footer-contact">
              <h4 className="mb-4">Contact Us</h4>
              <div className="d-flex justify-content-start align-items-start gap-3 ">
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <h6> 1602/6, Shayog Printers opp. Kansarawad, Navsari </h6>
              </div>
              <div className="d-flex justify-content-start align-items-start gap-3 ">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <h6> +(91)9426185518</h6>
              </div>
              <div className="d-flex justify-content-start align-items-start gap-3">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <h6>Coffeehouse@gmail.com </h6>
              </div>
              <div className="social-mediya d-flex gap-2 mt-3 ">
                <div className="border-1 border border-warning w-20 d-flex justify-content-center align-items-center p-2 rounded-circle">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="border-1 border border-warning w-20 d-flex justify-content-center align-items-center p-2 rounded-circle">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="border-1 border border-warning w-20 d-flex justify-content-center align-items-center p-2 rounded-circle">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="border-1 border border-warning w-20 d-flex justify-content-center align-items-center p-2 rounded-circle">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="footers-link">
                <h4 className="mb-4">Featured Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">Our Team</li>
                    <li className="list-group-item">Instagram feed</li>
                    <li className="list-group-item">Our Branches</li>
                    <li className="list-group-item">Careers</li>
                    <li className="list-group-item">Help & Support</li>
                </ul>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="footer-sub">
                <h4 className="mb-4">Newsletter</h4>
                <p>Get in your inbox the latest News and</p>
                <div className="d-flex footer-input">
                    <input type="text" placeholder="Email" className="form-control"/>
                    <button className="btn btn-warning meassage"><i className="fa-solid fa-envelope"></i></button>
                </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
