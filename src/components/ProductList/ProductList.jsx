import { ProductListRoot } from "./ProductList.styles";
import Product from "../Product/Product";

const ProductList = (props) => {
  return (
    <ProductListRoot>
      {props.inventory.map((product) => {
        return <Product details={product} key={product.productID} />;
      })}
    </ProductListRoot>
  );
};

export default ProductList;
