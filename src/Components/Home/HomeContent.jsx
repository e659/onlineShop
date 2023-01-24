import React, { useCallback, useState } from "react";
import Home from "./Home";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setProducts } from "../../Redux/actions/productActions";
import { selectProduct } from "../../Redux/actions/productActions";
import SingleProduct from "../Products/SingleProduct";
export default function HomeContent() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const fetchAllProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

    dispatch(selectProduct(response.data));
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);
  const Products = useSelector((state) => state.allProducts.products);
  console.log(Products);

  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore ? Products.length : 8;
  return (
    <>
      <Home/>
      <div className="container">
        <div className="row py-5">
          {/* <div className="col-md-2"> */}
          {/* <Filters onFilterChange={handleFilterChange} /> */}
          {/* </div> */}
          {/* <div className="col-md-10">
            <div className="row gy-3">
              <div className="col-md-3">
                <ProductList products={state.Products} />
              </div>
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="row gy-3">
              {Products.slice(0, numberOfItems)
              .map((prod) => (
                <div className="col-md-3" key={prod.id}>
                  <SingleProduct prod={prod} key={prod.id} />
                </div>
              ))}
              <div className="loadMore d-flex justify-content-center pt-5">
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
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
