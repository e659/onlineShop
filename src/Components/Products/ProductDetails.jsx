import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct } from "../../Redux/actions/productActions";
import "./styles/productDetails.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addToCartAction } from "../../Redux/actions/cartActions";
export default function ProductDetails() {
  const [over, setOver] = useState(false);
  const Product = useSelector((state) => state.product);
  console.log(Product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

    dispatch(selectProduct(response.data));
  };

  // addToCart
  const addToCart = () => {
    dispatch(addToCartAction(Product));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);
  return (
    <>
      <div className="container py-5">
        <div className="row py-5 detailsCardRow">
          <div className="col-md-5  photoSide d-flex justify-content-center">
            <img src={Product.image} alt="" className="img-fluid w-25" />
          </div>
          <div className="col-md-7 pt-5 px-5 detailsSide ">
            <p className="fs-4" style={{ color: "#2f3031" }}>
              Category: {Product.category}
            </p>
            <p className="fs-4" style={{ color: "#2f3031", fontWeight: "400" }}>
              {Product.title}
            </p>
            <p className="fs-6" style={{ color: "#606263" }}>
              {Product.description}
            </p>
            <p
              className="fs-4 pt-4"
              style={{ color: "#2f3031", fontWeight: "400" }}
            >
              {Product.price}$
            </p>
            {/* <div className="info d-flex justify-content-between pt-3">
              <div className="Quantity">
                <p
                  className="fs-5"
                  style={{ color: "#2f3031", fontWeight: "400" }}
                >
                  Quantity
                </p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREASE",
                      payload: Product.id,
                    })
                  }
                  className="btn QuantityBtn"
                >
                  +
                </button>
                <span
                  className="px-2 fs-4"
                  style={{ color: "#2f3031", fontWeight: "400" }}
                >
                 
                </span>
                <button
                  onClick={() =>
                    dispatch({
                      type: "DECREASE",
                      payload: Product.id,
                    })
                  }
                  className="btn QuantityBtn"
                >
                  -
                </button>
              </div>
              <div className="total pt-5">
                <p
                  className="fs-2"
                  style={{ color: "#2f3031", fontWeight: "400" }}
                >
                  {" "}
                  <span
                    className="fs-5"
                    style={{ color: "#2f3031", fontWeight: "400" }}
                  >
                    Total:{" "}
                  </span>
                  1500$
                </p>
              </div>
            </div> */}

            <button
              onClick={addToCart}
              className="btn AddToCartBtn mt-3 "
              onMouseOver={() => setOver(true)}
              onMouseLeave={() => setOver(false)}
            >
              <ul className="fa-ul ">
                {over ? (
                  <AiOutlineShoppingCart size={22} />
                ) : (
                  <li>
                    <span className="fa-li">
                      <AiOutlineShoppingCart size={22} className="mx-2" />
                    </span>{" "}
                    ADD TO CARD
                  </li>
                )}
              </ul>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
