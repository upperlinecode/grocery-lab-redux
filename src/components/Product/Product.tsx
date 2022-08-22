import { InventoryItem } from "../../utils";
import { ButtonGroup, ProductRoot } from "./Product.styles";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cartSlice";

const Product = (props: { item: InventoryItem }) => {
  const { item } = props;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addItem(item.productID));
  };
  const handleRemove = () => {
    dispatch(removeItem(item.productID));
  };
  return (
    <ProductRoot>
      <h2>{item.name}</h2>
      <h3>${item.priceInCents / 100}</h3>
      <ButtonGroup>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </ButtonGroup>
    </ProductRoot>
  );
};

export default Product;
