import { useDispatch, useSelector } from "react-redux";
import { clearItem } from '../../redux/cartSlice';
import { AppDispatch } from '../../redux/configureStore';
import { getCart } from "../../redux/selectors";
import { CartItem, ItemGroup, ShoppingCartRoot } from "./ShoppingCart.styles";

const ShoppingCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector(getCart);

  const total = cart.reduce(
    (previousValue, item) =>
      previousValue + item.qty * item.product.priceInCents,
    0
  );

  const remove = (id: string) => {
    dispatch(clearItem(id));
  };

  return (
    <ShoppingCartRoot>
      {cart.map(
        (item) =>
          item.qty > 0 && (
            <CartItem>
              <h3>{item.product.name}</h3>
              <ItemGroup>
                <h5>${item.product.priceInCents / 100}</h5>
                <h6>x{item.qty}</h6>
                <button onClick={() => remove(item.product.productID)}>
                  x
                </button>
              </ItemGroup>
            </CartItem>
          )
      )}

      <h2>Total: ${total / 100}</h2>
    </ShoppingCartRoot>
  );
};

export default ShoppingCart;
