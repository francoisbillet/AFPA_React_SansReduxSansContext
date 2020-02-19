import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  if (products.length == 0) {
    fetch(`https://server-ten.now.sh`)
      .then(body => body.json())
      .then(response => {
        // console.log(response);
        setProducts(response);
      });
  }

  const [cart, setCart] = React.useState([]);
  const addToCart = product => {
    if (!cart.find(element => element.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const [notes, setNotes] = React.useState([]);
  const addNote = note => {
    setNotes([...notes, note]);
  };

  return [products, cart, addToCart, notes, addNote];
};

function App() {
  const [products, cart, addToCart, notes, addNote] = useProducts();
  return (
    <BrowserRouter>
      <Header cart={cart} notes={notes} />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <main className="content">
              <ProductList products={products} />
            </main>
          </div>
        </Route>
        <Route exact path="/product/:id">
          <ProductPage cart={cart} addToCart={addToCart} />
        </Route>
      </Switch>
      <Footer addNote={addNote} />
    </BrowserRouter>
  );
}

export default App;
