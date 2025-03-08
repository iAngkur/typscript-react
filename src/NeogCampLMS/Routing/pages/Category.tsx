import React from "react";
import { phonesDB } from "../data";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export type Product = {
  id: number;
  name: string;
  memory: string;
  price: string;
};

export type ProrductCardProp = {
  product: Product;
};

function Category() {
  return (
    <div>
      <h1>iPhones</h1>
      <ul>
        {phonesDB.data.map((product: Product) => (
          <li
            key={product.id}
            style={{
              padding: "1rem",
              margin: "1rem",
              border: "1px solid #ccc",
              listStyle: "none",
            }}
          >
            <ProductCard product={product} />
            <Link to={`/product/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
