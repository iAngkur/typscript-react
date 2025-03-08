import React, { useState, useRef } from "react";

function DebouncingControlledInput() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const fetchData = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/users/search?q=${query}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout for debouncing
    timeoutRef.current = setTimeout(() => {
      if (value.length > 2) {
        fetchData(value);
      } else {
        setData([]);
      }
    }, 300);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
      />
      {loading && <p>Loading...</p>}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default DebouncingControlledInput;