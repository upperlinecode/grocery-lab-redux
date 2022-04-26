import { CartItem, ShoppingCartRoot } from "./ShoppingCart.styles";

const ShoppingCart = () => {
  return (
    <ShoppingCartRoot>
      <CartItem>
        <h3>Sample Item</h3>
        <h5>$ 100</h5>
      </CartItem>
      <CartItem>
        <h3>Sample Two</h3>
        <h5>$ 20</h5>
      </CartItem>
      <h2>Total: $ 120</h2>
    </ShoppingCartRoot>
  );
};

export default ShoppingCart;
