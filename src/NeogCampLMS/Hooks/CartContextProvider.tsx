import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Product } from "./ProductList";

interface MyContextProps {
  items: Product[];
  handleAddtoCart: (item: Product) => void;
  handleRemoveFromCart: (id: number) => void;
}

const CartContext = createContext<MyContextProps>({
  items: [],
  handleAddtoCart: (item: Product) => {},
  handleRemoveFromCart: (id: number) => {},
});

function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const handleAddtoCart = (item: Product) => {
    setItems([...items, item]);
  };

  const handleRemoveFromCart = (id: number) => {
    setItems((prevItems) => {
      const filteredItems = prevItems.filter((prevItem) => prevItem.id !== id);

      return filteredItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ items, handleAddtoCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);
