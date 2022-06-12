import React, { useContext } from "react";
import PostContext from "./context/ProductContext";
import "./ProductItem.css";
const ProductItem = ({ product }) => {
  const context = useContext(PostContext);
  const { deleteProduct } = context;
  return (
    <div className="ProductItem">
      <div className="tags">
        <p id="company">{product.company}</p>
        <p id="name">{product.name}</p>
        <p id="details">{product.details}</p>
      </div>
      <div className="image">
        <img
          style={{ width: "100px", height: "100px" }}
          src={product.image}
          alt="img"
        />
      </div>
      <div className="price">
        <p>${product.price}</p>
        <span>
          <i
            onClick={() => {
              deleteProduct(product.ID);
            }}
            class="fa-solid fa-eraser"
          ></i>
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
