export type Item = {
  name: string;
  price: number;
};

export type CartStateType = {
  items: Item[];
  totalPrice: number;
  totalQuantity: number;
};

export const initialState: CartStateType = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export default function cartReducer(
  state = initialState,
  action: { type: string; payload: { item: Item } }
) {
  const {
    type,
    payload: { item },
  } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, item],
        totalPrice: state.totalPrice + item.price,
        totalQuantity: state.totalQuantity + 1,
      };

    default:
      return state;
  }
}
