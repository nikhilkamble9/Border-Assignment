import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import "./CreateProduct.css";
import { Link } from "react-router-dom";
import ProductContext from "./context/ProductContext";
const CreateProduct = () => {
  const context = useContext(ProductContext);
  const { AddProduct } = context;
  const [Product, setProduct] = useState({
    company: "",
    name: "",
    price: "",
    image: "",
    details: "",
  });
  const handleOnChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setProduct({ ...Product, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    AddProduct(
      Product.company,
      Product.name,
      Product.price,
      Product.image,
      Product.details
    )
      .then((res) => {
        alert("Product added successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Product added failed!");
      });
  };
  return (
    <>
      <Navbar />
      <div className="CreateProduct">
        <h1>Add a new product</h1>
        <form onSubmit={handleOnSubmit} className="createproduct">
          <label htmlFor="">Product Company :</label>
          <input
            type="text"
            onChange={handleOnChange}
            name="company"
            id="company"
          />
          <label htmlFor="">Product Name :</label>
          <input type="text" onChange={handleOnChange} name="name" id="name" />
          <label htmlFor="">Price :</label>
          <input
            type="text"
            onChange={handleOnChange}
            name="price"
            id="price"
          />
          <label htmlFor="">Product Image :</label>
          <input
            type="text"
            onChange={handleOnChange}
            name="image"
            id="image"
          />
          <label htmlFor="">Details :</label>
          <input
            type="text"
            onChange={handleOnChange}
            name="details"
            id="details"
          />
          <button id="createlbutton" type="submit">
            Submit
          </button>
        </form>
        <Link to="/products">
          <button id="goback">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default CreateProduct;
