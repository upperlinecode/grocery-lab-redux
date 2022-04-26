import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./App.css";
import { inventory } from "../../utils";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <ShoppingCart />
      <div className="main">
        <ProductList inventory={inventory} />
      </div>
    </div>
  );
};

export default App;
