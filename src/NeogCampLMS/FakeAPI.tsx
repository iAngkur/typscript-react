import React, { useState } from "react";
import fakeFetch from "./fakeFetch";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ApiResponse {
  status: number;
  data: { products: Product[] };
}

function FakeAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const response: ApiResponse = await fakeFetch(
        "https://example.com/api/products"
      );

      if (response.status === 200) {
        const data: Product[] = response.data.products;
        setData(data);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>
        {isLoading ? "Loading..." : "Get product list"}
      </button>

      <ul>
        {data.length > 0 &&
          data.map(({ id, name, price, quantity }: Product) => (
            <li key={id}>
              <h3>{name}</h3>
              <p>Price: {price}</p>
              <p>Quantity: {quantity}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FakeAPI;
