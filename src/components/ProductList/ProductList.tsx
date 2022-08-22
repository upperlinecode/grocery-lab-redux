import { inventory } from "../../utils";
import { ProductListRoot } from "./ProductList.styles";
import Product from "../Product/Product";

const ProductList = (props: { inventory: any }) => {
  return (
    <ProductListRoot>
      {inventory.map((item) => (
        <Product item={item} key={item.productID} />
      ))}
    </ProductListRoot>
  );
};

export default ProductList;
