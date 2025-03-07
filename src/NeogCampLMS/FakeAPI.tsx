import React, { ChangeEvent, useEffect, useRef, useState } from "react";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Product[]>([]);
  const [highlight, setHighlight] = useState<boolean>(false);

  const filteredPrice = useRef<number>(0);

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

  useEffect(() => {
    fetchData();
  }, []);

  const hanldeFilteredPrice = (e: ChangeEvent<HTMLInputElement>) => {
    filteredPrice.current = Number(e.target.value);
  };

  return (
    <div>
      <button onClick={fetchData}>
        {isLoading ? "Loading..." : "Get product list"}
      </button>
      <button
        onClick={() => setHighlight(!highlight)}
      >{`Highlight products with price`}</button>
      <input type="number" min={0} onChange={hanldeFilteredPrice} />
      <ul style={{ listStyle: "none" }}>
        {data.length > 0 &&
          data.map(({ id, name, price, quantity }: Product) => (
            <li
              key={id}
              style={{
                border:
                  highlight && price >= filteredPrice.current
                    ? "2px solid green"
                    : "1px solid #ccc",
                margin: "0.5rem",
                padding: "0.5rem",
              }}
            >
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
