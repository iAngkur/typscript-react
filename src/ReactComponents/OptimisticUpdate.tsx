import React, { useState } from "react";
import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
};

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 0.5em;
`;

type Item = {
  name: string;
  price: number;
  quantity: number;
};

function OptimisticUpdate() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = async (newItem: Item) => {
    console.log("Adding Item");

    // Update immediately
    setItems([...items, newItem]);

    try {
      await fetch("https://api.example.com/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
    } catch (error) {
      console.log("error", error);
      setTimeout(() => {
        // Revert on error
        setItems(items);
      }, 2000);
    }
  };

  return (
    <div>
      <Button
        primary
        onClick={() => addItem({ name: "Body Spray", price: 200, quantity: 2 })}
      >
        +Add
      </Button>
      {items.map((item: Item, index: number) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <h5>{item.price}</h5>
          <h5>{item.quantity}</h5>
        </div>
      ))}
    </div>
  );
}

export default OptimisticUpdate;
