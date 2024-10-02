import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
  info: Info;
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

const useData = <T>(endpoint: string, deps: any[] = []) => {
  const [data, setData] = useState<T[]>([]);
  const [info, setInfo] = useState<Info>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    const [baseUrl, query] = endpoint.split('?');
    const urlWithPage = `${baseUrl}?page=${page}${query ? `&${query}` : ""}`;
    apiClient
      .get<FetchResponse<T>>(urlWithPage, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setInfo(res.data.info);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [endpoint, page, ...deps]);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return { data, error, info, isLoading, nextPage, prevPage, page };
};

export default useData;
