import { InventoryItem } from "../../utils";
import { ButtonGroup, ProductRoot } from "./Product.styles";

const Product = (props: { item: InventoryItem }) => {
  const { item } = props;
  const { name, productID, priceInCents } = item;
  const handleAdd = () => {
    alert("add button test");
  };
  const handleRemove = () => {};
  return (
    <ProductRoot>
      <h2>{name}</h2>
      <h3>${priceInCents / 100}</h3>
      <ButtonGroup>
        <button onClick={handleAdd}>Add</button>
        <button>Remove</button>
      </ButtonGroup>
    </ProductRoot>
  );
};

export default Product;
