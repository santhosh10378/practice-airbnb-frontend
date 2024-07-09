import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import useAuth from "./useAuth";

const useMutation = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { user, getCurrentUser } = useAuth();

  const mutateData = async ({
    method,
    url,
    requestData,
    multipart = false,
  }) => {
    setLoading(true);

    try {
      const config = {
        headers: multipart ? { "Content-Type": "multipart/form-data" } : {},
      };

      let response;
      if (method.toUpperCase() === "POST") {
        response = await axiosClient.post(url, requestData, config);
      } else if (method.toUpperCase() === "PUT") {
        response = await axiosClient.put(url, requestData, config);
      } else if (method.toUpperCase() === "DELETE") {
        response = await axiosClient.delete(url, config);
      }

      setData(response.data);
      toast.success(response.data.message);
      await getCurrentUser();
    } catch (error) {
      setError(error);
      toast.success(error.response.data.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    console.log("mutated");
  }, [JSON.stringify(user)]);

  return { loading, data, error, mutateData };
};

export default useMutation;
