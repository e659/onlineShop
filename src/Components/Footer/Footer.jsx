import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import "./Footer.scss";
export default function Footer() {
  return (
    <>
      <div className="footerContainer ">
        <div className="container ">
          <div className="row py-5">
            <div className="col-6 col-md-3">
              <h2 style={{ color: "black" }}>Get In Touch</h2>
              <p style={{ fontSize: "12px" }}>
                Don’t miss any updates of our new offers and features.!
              </p>
              <form action="#" method="post">
                <input
                  style={{ width: "50%" }}
                  type="text"
                  name="email"
                  className="form-control memail mb-3"
                  placeholder="Email"
                />
                <button className="btn footerSubmitBtn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-6 col-md-3">
              <h2 style={{ color: "black" }}>Links</h2>
              <ul className="list-unstyled f_list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="py-2">
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Products</a>
                </li>
                <li className="py-2">
                  <a href="/">Offers</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h2 style={{ color: "black" }}>Help</h2>
              <ul className="list-unstyled f_list">
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li className="py-2">
                  <a href="/">Term &amp; conditions</a>
                </li>
                <li>
                  <a href="/">Reporting</a>
                </li>
                <li className="py-2">
                  <a href="/">Documentation</a>
                </li>
                <li>
                  <a href="/">Support Policy</a>
                </li>
                <li className="pt-2">
                  <a href="/">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h2 style={{ color: "black" }}>social Media</h2>
              <div className="f_social_icon">
                <a href="/">
                  <FaFacebookF size={20} />
                </a>

                <a className="px-4" href="/">
                  <FaTwitter size={20} />
                </a>

                <a href="/">
                  <FaLinkedin size={20} />
                </a>

                <a className="px-4" href="/">
                  <FaPinterest size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
