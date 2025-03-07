import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

const useFetchData = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong while fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data, error, refetch: fetchData };
};

function Home() {
  const { loading, data, error, refetch } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <button onClick={refetch}>Refetch data</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {(!data || data.length === 0) && <div>No data found!</div>}

      {data.map((user: User) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
