import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

function useGetJobs(initial = false) {
  const [state, setState] = useState({
    isLoading: false,
    data: [],
    totalCount: 0,
    hasMore: true,
    page: 1,
    pageSize: 3,
  });

  const getJobs = () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    axiosInstance
      .get("/v1/jobs/", {
        params: {
          page: state.page,
          limit: state.pageSize,
        },
      })
      .then((res) => {
        setState((prev) => ({
          ...prev,
          page: res.data.result.meta.page,
          data: [...prev.data, ...res.data.result.items],
          totalCount: res.data.result.meta.total,
          hasMore:
            res.data.result.items.length + state.data.length + 3 <
            res.data.result.meta.total,
        }));
      })
      .finally(() => setState((prev) => ({ ...prev, isLoading: false })));
  };
  const getNextPage = () => {
    setState((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  useEffect(() => {
    if (state.page > 1) getJobs();
  }, [state.page]);

  return { ...state, getNextPage };
}

export default useGetJobs;
