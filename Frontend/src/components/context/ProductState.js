import React, { useState } from "react";
import PostContext from "./ProductContext";

const ProductState = (props) => {
  const host = "https://shielded-lake-72465.herokuapp.com";
  const [Products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(`${host}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };
  const AddProduct = async (company, name, price, image, details) => {
    console.log("Adding the post");
    //---------------
    const response = await fetch(`${host}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        name,
        price,
        image,
        details,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteProduct = async function (id) {
    const response = await fetch(`${host}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    alert("Product deleted successfully! Please refresh...");
  };
  return (
    <PostContext.Provider
      value={{
        host,
        getProducts,
        AddProduct,
        deleteProduct,
        Products,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default ProductState;
