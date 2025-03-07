import React, { useEffect, useState } from "react";

function DebouncingControlledInput() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      const timeoutId = setTimeout(() => {
        fetch(`https://dummyjson.com/users/search?q=${query}`)
          .then((res) => res.json())
          .then(setData)
          .catch((error) => console.log(error));
      }, 300);

      return () => console.log(" inside block ::> clearing the previous call");
    }
    return () => console.log("clearing the previous call");
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default DebouncingControlledInput;
