import { useSelector } from "react-redux";
import { CartItem, ItemGroup, ShoppingCartRoot } from "./ShoppingCart.styles";
import { createDollarString } from "../../utils";
import { StoreStateShape } from "../../redux/configureStore";

const ShoppingCart = () => {
  const cart =
    useSelector((state: StoreStateShape) => state.cartReducer.cart) || [];
  const total = cart.reduce((acc, item) => {
    console.log(item, acc);
    const additionalAmount = item.qty * item.priceInCents;
    return acc + additionalAmount;
  }, 0);
  return (
    <ShoppingCartRoot>
      {cart.map((item) => {
        return (
          <CartItem key={item.productID}>
            <h3>{item.name}</h3>
            <ItemGroup>
              <h5>{createDollarString(item.priceInCents)}</h5>
              <h6>x{item.qty}</h6>
            </ItemGroup>
          </CartItem>
        );
      })}
      {/* <CartItem>
        <h3>Sample Item</h3>
        <ItemGroup>
          <h5>$ 100</h5>
          <h6>x1</h6>
        </ItemGroup>
      </CartItem>
      <CartItem>
        <h3>Sample Two</h3>
        <ItemGroup>
          <h5>$ 20</h5>
          <h6>x5</h6>
        </ItemGroup>
      </CartItem> */}
      <h2>Total: {createDollarString(total)}</h2>
    </ShoppingCartRoot>
  );
};

export default ShoppingCart;
