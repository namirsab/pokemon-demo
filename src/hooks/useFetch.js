import { useState, useEffect } from "react";

export default function useFetch(url, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return [data, isLoading, error];
}
