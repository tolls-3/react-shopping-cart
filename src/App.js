import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = item => {
	  //debugger;
    setCart(
      cart.filter(book => {
        return book.id !== item.id;
      })
    );
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation />

          {/* Routes */}
          <Route
            exact
            path="/"
            component={Products}
            //   render={() => <Products products={products} addItem={addItem} />}
          />

          <Route
            path="/cart"
            component={ShoppingCart}
            // render={() => <ShoppingCart cart={cart} removeItem={removeItem} />}
          />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
