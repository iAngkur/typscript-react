import React, { useState } from "react";

function Dropdown() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <h2
        style={{
          backgroundColor: selectedColor || "black",
          padding: "0.5rem",
          color: "white",
          textAlign: "center",
        }}
      >
        Choose a color to change the background
      </h2>
      <select
        value={selectedColor}
        onChange={(e) => {
          setSelectedColor(e.target.value);
        }}
      >
        <option value="">Select color</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}

export default Dropdown;
