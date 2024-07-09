import { useEffect, useState, useCallback } from "react";
import axiosClient from "../utils/axiosClient";
import useAuth from "./useAuth";

const throttle = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
};

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const useFetch = ({
  url,
  params = {},
  throttleDelay = 0,
  debounceDelay = 0,
  page = 1,
  pageSize = 10,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get(url, {
        params: { ...params, page, pageSize },
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [url, JSON.stringify(params), page, pageSize]);

  const fetchDataWithDebounce = useCallback(
    debounce(fetchData, debounceDelay),
    [fetchData, debounceDelay]
  );

  const fetchDataWithThrottle = useCallback(
    throttle(fetchData, throttleDelay),
    [fetchData, throttleDelay]
  );

  useEffect(() => {
    if (url) {
      if (debounceDelay > 0) {
        fetchDataWithDebounce();
      } else if (throttleDelay > 0) {
        fetchDataWithThrottle();
      } else {
        fetchData();
      }
    }

    console.log("fetched", url);
  }, [url, JSON.stringify(params), JSON.stringify(user)]);

  const setPage = useCallback(
    (newPage) => {
      if (newPage !== page) {
        fetchData();
      }
    },
    [fetchData, page]
  );

  const setPageSize = useCallback(
    (newPageSize) => {
      if (newPageSize !== pageSize) {
        fetchData();
      }
    },
    [fetchData, pageSize]
  );

  return { loading, data, error, fetchData, setPage, setPageSize };
};

export default useFetch;
