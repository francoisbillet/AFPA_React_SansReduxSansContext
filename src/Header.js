import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header = props => {
  //   let history = useHistory();
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <p>Cart : {props.cart.length}</p>
        <p>
          Moyenne des notes :
          {props.notes.length > 0
            ? props.notes.reduce((acc, item) => acc + item, 0) /
              props.notes.length
            : 5}
        </p>
      </nav>
    </header>
  );
};

export default Header;
