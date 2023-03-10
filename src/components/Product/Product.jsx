import { useDispatch } from "react-redux";
import { createDollarString } from "../../utils";
import { ButtonGroup, ProductRoot } from "./Product.styles";
import { addItem, removeItem } from "../../redux/cartSlice";

const Product = (props) => {
  const { name, priceInCents } = props.details;
  const dollarString = createDollarString(priceInCents);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(props.details));
  };

  const handleRemove = () => {
    dispatch(removeItem(props.details));
  };

  return (
    <ProductRoot>
      <h2>{name}</h2>
      <h3>{dollarString}</h3>
      <ButtonGroup>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </ButtonGroup>
    </ProductRoot>
  );
};

export default Product;
