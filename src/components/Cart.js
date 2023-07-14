import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingContext } from "../ShoppingContext";
import CartDisplayItem from "./CartDisplayItem";

export default function Catalog(props) {
  const context = useContext(ShoppingContext);

  return (
    <div className="container">
      <h1 className="mb-4">Shopping Cart</h1>
      <div className="row">
        <div className="col">
          <h2>Cart</h2>
          <ul className="list-group">
            {context.cartItems.map((item) => (
              <CartDisplayItem
                {...item.product}
                quantity={item.quantity}
                decreaseAction={() =>
                  context.handleDecreaseQuantity(item.product.id)
                }
                adjustAction={(e) => {
                  context.adjustQuantity(item.product.id, e.target.value);
                }}
                increaseAction={() =>
                  context.handleIncreaseQuantity(item.product.id)
                }
                deleteAction={() => context.deleteItem(item.product.id)}
              />
            ))}
          </ul>
          <div className="total mt-4">
            <h4>Total: ${/* Display the total */ context.calculateTotal()}</h4>
            <h6>
              <i>[Breakdown: {context.breakdown.current}]</i>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
