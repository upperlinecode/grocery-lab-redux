import { ProductListRoot } from "./ProductList.styles";
import Product from "../Product/Product";
import { InventoryItem } from "../../utils";

const ProductList = (props: { inventory: InventoryItem[] }) => {
  return (
    <ProductListRoot>
      {props.inventory.map((product) => {
        return <Product details={product} key={product.productID} />;
      })}
    </ProductListRoot>
  );
};

export default ProductList;
