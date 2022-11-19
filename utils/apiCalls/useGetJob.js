import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

function useGetJob({ id }) {
  const [state, setState] = useState({
    isLoading: false,
    data: [],
  });
  const getJob = () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    axiosInstance
      .get(`/v1/jobs/${id}`)
      .then((res) => {
        setState({ isLoading: false, data: res.data.result });
      })
      .finally(() => setState((prev) => ({ ...prev, isLoading: false })));
  };
  useEffect(() => {
    if (id) getJob();
  }, [id]);

  return { ...state };
}

export default useGetJob;
