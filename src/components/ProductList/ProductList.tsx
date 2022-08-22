import { InventoryItem } from "../../utils";
import Product from "../Product/Product";
import { ProductListRoot } from "./ProductList.styles";

const ProductList = (props: { inventory: InventoryItem[] }) => {
  const { inventory } = props;
  return (
    <ProductListRoot>
      {inventory.map((item) => (
        <Product item={item} />
      ))}
    </ProductListRoot>
  );
};

export default ProductList;
