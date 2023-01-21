import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  // cartCount
  const cartLength = useSelector((state) =>
    state.cart.cart.reduce((a, b) => a + b.quantity, 0)
  );
  // console.log(cartLength)
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <Link className="navbar-brand fs-2" to="/home">
            Online Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <BsSearch size={25} style={{ cursor: "pointer" }} />
                <Link to="/cart">
                  <AiOutlineShoppingCart
                    size={25}
                    className="mx-4 position-relative"
                    style={{ color: "black" }}
                  />
                  <span className="cartLength">{cartLength}</span>
                </Link>
                <CgProfile size={25} style={{ cursor: "pointer" }} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
