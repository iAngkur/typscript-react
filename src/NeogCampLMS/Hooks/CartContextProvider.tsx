import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MyContextProps {
  items: number;
  setItems: Dispatch<SetStateAction<number>>;
}

const CartContext = createContext<MyContextProps>({
  items: 0,
  setItems: () => {},
});

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState(0);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);
