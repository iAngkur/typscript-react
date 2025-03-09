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
  const { handleAddtoCart } = useCartContext();

  const elem = products.map((item) => (
    <div
      key={item.id}
      style={{
        border: "1px solid gray",
        margin: "0.25rem",
        padding: "0.5rem",
      }}
    >
      <h2>
        {item.name} <small>INR {item.price}</small>
      </h2>
      <button onClick={() => handleAddtoCart(item)}>Add to Cart</button>
    </div>
  ));

  return <div>{elem}</div>;
}

export default ProductList;
