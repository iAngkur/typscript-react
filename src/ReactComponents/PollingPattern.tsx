import React, { useEffect, useRef, useState } from "react";

function PollingPattern() {
  const [data, setData] = useState(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://dummyjson.com/users/")
        .then((res) => res.json())
        .then(setData);
    };

    fetchData();

    intervalRef.current = setInterval(fetchData, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return <div>Data: {JSON.stringify(data)}</div>;
}

export default PollingPattern;
