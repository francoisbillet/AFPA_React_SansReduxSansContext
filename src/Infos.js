import React from "react";

const Infos = ({ product, cart, addToCart }) => {
  return (
    <React.Fragment>
      <div className="product-description">
        <span>product</span>
        <h1>{product ? product.title : ""}</h1>
        <p>{product ? product.description : ""}</p>
      </div>

      <div className="product-configuration">
        <div className="product-color">
          <span>Couleur</span>
          <div className="color-choose">
            <div>
              <input
                data-image="red"
                type="radio"
                id="red"
                name="color"
                value="red"
                // checked
              />
              <label htmlFor="red">
                <span></span>
              </label>
            </div>
            <div>
              <input
                data-image="blue"
                type="radio"
                id="blue"
                name="color"
                value="blue"
              />
              <label htmlFor="blue">
                <span></span>
              </label>
            </div>
            <div>
              <input
                data-image="black"
                type="radio"
                id="black"
                name="color"
                value="black"
              />
              <label htmlFor="black">
                <span></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="product-price">
        <span>148€</span>
        <button onClick={() => addToCart(product)} className="cart-btn">
          Ajouter au panier
        </button>
      </div>
    </React.Fragment>
  );
};

export default Infos;
