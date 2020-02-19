import React from "react";
import Product from "./Product";

const ProductList = props => {
  return (
    <ul>
      {props.products.map(product => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
};
export default ProductList;
