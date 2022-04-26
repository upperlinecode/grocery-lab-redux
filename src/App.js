import React, {Component} from 'react';
import './App.css';
import ShoppingCart from './components/shoppingcart';
import ProductList from './components/productList';
import Hero from './components/hero';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }

  // Inventory - we might normally prefer to use a database, but this is a good placeholder.
  inventory = [
    {name: "Apple", price: 1.99},
    {name: "Loaf of Bread", price: 1.50},
    {name: "Milk", price: 2.50}
  ]

  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function has not.
  addToShoppingCart = (item) => {
    let newCart = [...this.state.cart, item]
    this.setState(state => {
      state.cart = newCart
      return state
    })
  }

  removeFromShoppingCart = (item) => {}

  render() {
    return (
      <div className="App">
        <Hero/>
        <ShoppingCart />
        <div className="main">
          <ProductList inventory={this.inventory}/>
        </div>
      </div>
    );
  }
}

export default App;
