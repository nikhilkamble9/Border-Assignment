import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PostContext from "./context/ProductContext";
import Navbar from "./Navbar";
import ProductItem from "./ProductItem";
import "./ProductPage.css";
import Slider from "./Slider";

const ProductPage = () => {
  const context = useContext(PostContext);
  const { Products, getProducts } = context;
  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="ProductPage">
        <Slider />

        <div className="products">
          <div className="title">
            <Link to="/createproduct">
              <button id="productcreate">Add a Product to Sell</button>
            </Link>
          </div>
          <div className="items">
            {Products.map((product) => {
              return <ProductItem product={product} key={product.ID} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
