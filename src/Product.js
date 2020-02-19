import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  //   console.log(product);
  return (
    <div className="product">
      <img src={product.img} />
      <div className="product-content">
        <h3>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>

        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
