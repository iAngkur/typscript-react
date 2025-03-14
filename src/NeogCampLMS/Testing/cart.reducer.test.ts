import cartReducer, { CartStateType, Item } from "./cart.reducer";

describe("Testing Cart", () => {
  it("should add item to the cart", () => {
    const initialState: CartStateType = {
      items: [{ name: "book", price: 500 }],
      totalPrice: 500,
      totalQuantity: 1,
    };

    const action: { type: string; payload: { item: Item } } = {
      type: "ADD_TO_CART",
      payload: { item: { name: "pen", price: 50 } },
    };

    const updatedState = cartReducer(initialState, action);

    expect(updatedState).toEqual({
      items: [
        { name: "book", price: 500 },
        { name: "pen", price: 50 },
      ],
      totalPrice: 550,
      totalQuantity: 2,
    });
  });

  it("should remove an item from the cart", () => {
    const initialState = {
      items: [
        { name: "book", price: 500 },
        { name: "pen", price: 50 },
      ],
      totalPrice: 550,
      totalQuantity: 2,
    };

    const action = {
      type: "REMOVE_FROM_CART",
      payload: {
        item: {
          name: "book",
          price: 500,
        },
      },
    };

    const updatedState = cartReducer(initialState, action);
    expect(updatedState).toEqual({
      items: [{ name: "pen", price: 50 }],
      totalPrice: 50,
      totalQuantity: 1,
    });
  });
});
