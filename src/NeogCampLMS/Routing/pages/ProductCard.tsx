import React from "react";
import { Link } from "react-router-dom";
import { ProrductCardProp } from "./Category";

function ProductCard({ product }: ProrductCardProp) {
  const { name, memory, price } = product;

  return (
    <>
      <div style={{ fontSize: "large", fontWeight: "bold" }}>
        {name} {memory}
      </div>
      <div>Price: {price}</div>
    </>
  );
}

export default ProductCard;
