import React from "react";
import Infos from "./Infos";
import { Link, useParams, useHistory } from "react-router-dom";
import Image from "./Image";

const useProduct = () => {
  const [products, setProducts] = React.useState([]);
  const { id } = useParams();
  // On pourrait faire remonter l'appel serveur dans app pour ne le faire qu'une fois et utiliser les props
  React.useEffect(() => {
    fetch("https://server-ten.now.sh")
      .then(body => body.json())
      .then(response => {
        setProducts(response);
      });
  }, []);

  const product = products.find(product => {
    return product.id === id;
  });

  return [product];
};

const ProductPage = props => {
  const [product] = useProduct();
  return (
    <React.Fragment>
      <main className="product">
        <div className="left-column">
          <Image
            src={product ? product.img : ""} // pas les {} parce que string uniquement
            alt={product ? product.title : ""}
          />
        </div>
        <div className="right-column">
          <Infos
            product={product}
            cart={props.cart}
            addToCart={props.addToCart}
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductPage;
