import { CartItem, ItemGroup, ShoppingCartRoot } from "./ShoppingCart.styles";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/selectors";

const ShoppingCart = () => {
  const cart = useSelector(getCart);
  console.log(cart);
  const total = cart.reduce(
    (total, next) => (total += next.product.priceInCents * next.qty),
    0
  );
  return (
    <ShoppingCartRoot>
      {cart.map((item) => (
        <CartItem>
          <h3>{item.product.name}</h3>
          <ItemGroup>
            <h5>$ {item.product.priceInCents / 100}</h5>
            <h6>x {item.qty}</h6>
          </ItemGroup>
        </CartItem>
      ))}
      <h2>Total: $ {total / 100}</h2>
    </ShoppingCartRoot>
  );
};

export default ShoppingCart;
