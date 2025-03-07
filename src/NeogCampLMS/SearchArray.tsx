import React, { ChangeEvent, useEffect, useState } from "react";

type Fruit = {
  name: string;
  color: string;
  quantity: number;
};

const fruitsList: Fruit[] = [
  { name: "Apple", color: "Red", quantity: 10 },
  { name: "Banana", color: "Yellow", quantity: 5 },
  { name: "Orange", color: "Orange", quantity: 3 },
  { name: "Grape", color: "Purple", quantity: 7 },
];

function SearchArray() {
  const [fruits, setFruits] = useState<Fruit[]>(fruitsList);
  // const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    if (!searchTerm) {
      setFruits(fruitsList);
      return;
    }

    setFruits(fruitsList.filter((fruit) => fruit.name === searchTerm));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="searchTerm"
          onInput={handleSearch}
          placeholder="Search"
        />
      </div>
      {fruits.length > 0 ? (
        <ul style={{ listStyle: "none" }}>
          {fruits.map(({ name, color, quantity }) => (
            <li
              key={name}
              style={{
                border: "1px solid #ccc",
                padding: "0.5rem",
                margin: "0.5rem",
              }}
            >
              <h3>
                {name} ({quantity})
              </h3>
              <p>Color: {color}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No Fruits found</h3>
      )}
    </div>
  );
}

export default SearchArray;
