import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

function useGetRequest<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [url]);

  return { data: data as T, loading, error };
}

export default useGetRequest;
