import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/actions";
import { InventoryItem } from "../../utils";
import { ButtonGroup, ProductRoot } from "./Product.styles";

const Product = (props: { item: InventoryItem }) => {
  // destructure the props for easy access
  const { name, priceInCents, productID } = props.item;
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(productID));
  };

  const handleRemove = () => {
    dispatch(removeItem(productID));
  };

  return (
    <ProductRoot>
      <h2>{name}</h2>
      <h3>${priceInCents / 100}</h3>
      <ButtonGroup>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </ButtonGroup>
    </ProductRoot>
  );
};

export default Product;
