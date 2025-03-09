import React from "react";
import { useCartContext } from "./CartContextProvider";
import { Product } from "./ProductList";

type CartProductItem = {
  item: Product;
  count: number;
};

type CartProduct = {
  [key: number]: CartProductItem;
};

function Cart() {
  const { items, handleRemoveFromCart } = useCartContext();

  const cartItems: CartProduct = items.reduce((cart, item) => {
    const itemId = item.id;

    if (cart[itemId]) {
      cart[itemId] = {
        ...cart[itemId],
        count: cart[itemId].count + 1,
      };
    } else {
      cart[itemId] = {
        item,
        count: 1,
      };
    }
    return cart;
  }, {} as CartProduct);

  const totalCost = Object.values(cartItems).reduce(
    (total, cartItem) => total + cartItem.item.price * cartItem.count,
    0
  );

  return (
    <div>
      <h3>Total Cost {totalCost} INR</h3>
      {Object.values(cartItems).length > 0 ? (
        Object.values(cartItems).map((cartItem) => {
          const { id, name, price } = cartItem.item;
          return (
            <div
              key={id}
              style={{
                border: "1px solid gray",
                margin: "0.25rem",
                padding: "0.5rem",
              }}
            >
              <h2>
                {`${name} - Quantity: ${cartItem.count} ---->`}
                <small>INR {price}</small>
              </h2>
              <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
            </div>
          );
        })
      ) : (
        <h3>Cart is empty!</h3>
      )}
    </div>
  );
}

export default Cart;
