import React from "react";
import { useCartContext } from "./CartContextProvider";

export type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  const { items, setItems } = useCartContext();

  const onAddToCart = () => {
    setItems(items + 1);
  };

  const elem = products.map(({ id, name, price }) => (
    <div
      key={id}
      style={{
        border: "1px solid gray",
        margin: "0.25rem",
        padding: "0.5rem",
      }}
    >
      <h2>
        {name} <small>INR {price}</small>
      </h2>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  ));

  return <div>{elem}</div>;
}

export default ProductList;
