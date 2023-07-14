import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingContext } from "../ShoppingContext";
import ProductItem from "./ProductItem";

export default function Catalog(props) {
  const context = useContext(ShoppingContext);

  return (
    <div className="container">
      <h1 className="mb-4">Product Catalog</h1>
      <div className="row">
        <div className="col">
          <h2>Products</h2>
          <div className="list-group">
            {context.sampleProducts.map((product) => (
              <ProductItem
                {...product}
                clickAction={() => context.addToCart(product)}
              />
            ))}
          </div>
        </div>
        <div className="col">
          <h4>Shopping Cart</h4>
          <h5>Total: ${context.calculateTotal()}</h5>
          <h6>
            <i>[Breakdown: {context.breakdown.current}]</i>
          </h6>
        </div>
      </div>
    </div>
  );
}
