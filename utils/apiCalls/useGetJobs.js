import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

function useGetJobs() {
  const [state, setState] = useState({
    isLoading: false,
    data: [],
    totalCount: 0,
    hasMore: true,
    page: 1,
    pageSize: 3,
  });

  const getJobs = (search = false, params = {}) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      page: search ? 1 : prev.page,
    }));
    axiosInstance
      .get("/v1/jobs/", {
        params: {
          page: state.page,
          limit: state.pageSize,
          ...params,
        },
      })
      .then((res) => {
        setState((prev) => ({
          ...prev,
          page: res.data.result.meta.page,
          data: search
            ? res.data.result.items
            : [...prev.data, ...res.data.result.items],
          totalCount: res.data.result.meta.total,
          hasMore: search
            ? res.data.result.items.length < res.data.result.meta.total
            : res.data.result.items.length + state.data.length <
              res.data.result.meta.total,
        }));
      })
      .finally(() => setState((prev) => ({ ...prev, isLoading: false })));
  };
  const getNextPage = () => {
    setState((prev) => ({ ...prev, page: prev.page + 1 }));
  };
  const search = (params) => {
    getJobs(true, params);
  };

  const initiateState = (data) => {
    setState({
      pageSize: 3,
      page: 1,
      data: data.result.items,
      totalCount: data.result.meta.total,
      hasMore: data.result.items.length < data.result.meta.total,
    });
  };

  useEffect(() => {
    if (state.page > 1) {
      const params = new URLSearchParams(document.location.search);
      const location = params.get("location");
      const keyword = params.get("keyword");
      const fullTimeOnly = params.get("fullTimeOnly");
      console.log(location, keyword, fullTimeOnly);
      getJobs(false, { location, keyword, fullTimeOnly });
    }
  }, [state.page]);

  return { ...state, getNextPage, search, initiateState };
}

export default useGetJobs;
