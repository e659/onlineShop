import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import "./Cart.scss";
import {
  clearAllCartAction,
} from "../../Redux/actions/cartActions";
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  // clearAllCart
  const clearAllCart = () => {
    dispatch(clearAllCartAction());
  };
  return (
    <>
      <div className="container py-5">
        <div className="pt-5 d-flex">
          <p
            className="px-2 fs-4 "
            style={{ color: "#2f3031", fontWeight: "400" }}
          >
            Total:
            <span
              className="px-2 fs-4"
              style={{ color: "#2f3031", fontWeight: "400" }}
            >
              {parseFloat(cartTotal).toFixed(2)}$
            </span>
          </p>
          <button
            onClick={clearAllCart}
            style={{ color: "white", backgroundColor: "darkmagenta" }}
            className="btn clearbtn mb-2"
          >
            ClearAll
          </button>
        </div>

        {cart.map((product) => (
          <div className="row cartCard  p-3  mt-3" key={product.id}>
            <div className="col-md-12 d-flex justify-content-center ">
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product.id,
                      })
                    }
                    className="btn"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                </div>

                <div className="col-md-6">
                  <div className="d-flex cartImg">
                    <img src={product.image} alt="" className="rounded w-25" />

                    <p className=" ps-3 fs-4 cartTitle">
                      {product.title}
                      <span> x ({product.quantity})</span>
                    </p>
                  </div>
                </div>

                <div className="col-md-6 pt-4">
                  <div className="row pt-5">
                    <div className="col-6">
                      <div className="Quantity">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "INCREASE",
                              payload: product.id,
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
                          {product.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "DECREASE",
                              payload: product.id,
                            })
                          }
                          className="btn QuantityBtn"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <p className="fs-3">
                        {parseFloat(product.quantity * product.price).toFixed(
                          2
                        )}
                        $
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
