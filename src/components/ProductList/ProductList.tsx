import { inventory, InventoryItem } from "../../utils";
import Product from "../Product/Product";
import { ProductListRoot } from "./ProductList.styles";

const ProductList = (props: { inventory: InventoryItem[] }) => {
  return (
    <ProductListRoot>
      {inventory.map((item) => (
        <Product key={item.productID} item={item} />
      ))}
    </ProductListRoot>
  );
};

export default ProductList;
