import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { phonesDB } from "../data";
import { Product } from "./Category";
import ProductCard from "./ProductCard";

function ProductDetails() {
  const { productId } = useParams();

  const product = phonesDB.data.find(
    (p: Product) => p.id === Number(productId)
  );

  return (
    <div>
      {product ? <ProductCard product={product} /> : "No Details Found"}

      <Link to="/category">Back to Category</Link>
    </div>
  );
}

export default ProductDetails;
