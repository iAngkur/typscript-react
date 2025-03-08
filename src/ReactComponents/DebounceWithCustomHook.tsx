import React, { useState, useEffect } from 'react';

const useDebouncedValue = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

export default function App() {
  const [input, setInput] = useState('');
  const debouncedInput = useDebouncedValue(input, 500);

  useEffect(() => {
    const controller = new AbortController();
    
    if (debouncedInput) {
      fetch(`https://api.example.com/search?q=${debouncedInput}`, {
        signal: controller.signal
      })
      .then(response => response.json())
      .then(data => console.log("Results:", data))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error("API Error:", error);
        }
      });
    }

    return () => controller.abort();
  }, [debouncedInput]);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}