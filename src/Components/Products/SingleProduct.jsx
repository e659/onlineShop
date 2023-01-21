import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/singleProduct.scss";

export default function SingleProduct({ prod }) {
  const Products = useSelector((state) => state.allProducts.products);
  const Product = useSelector((state) => state.product);
  // console.log(Products);
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore ? Products.length : 4;

  return (
    <>
      <div className="card " style={{ cursor: "pointer" }}>
        <Link
          to={`/product/${prod.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="d-flex justify-content-center">
            <img
              src={prod.image}
              className="card-img-top pt-3  image-fluid w-50"
              alt={prod.title}
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title" style={{ fontSize: "15px" }}>
              {prod.title}
            </h5>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color: "darkmagenta",
              }}
            >
              {prod.category}
            </p>
            <p
              className="price"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              ${prod.price}
            </p>
          </div>
        </Link>
      </div>

      {/* <div className="loadMore d-flex justify-content-center pt-5">
        {showMore ? (
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn btn-outline-primary"
          >
            Load less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn btn-outline-primary"
          >
            Load more
          </button>
        )}
      </div> */}
    </>
  );
}
