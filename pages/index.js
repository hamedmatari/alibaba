import { useEffect, useState } from "react";

import Filters from "components/Filters";
import ItemCard from "components/ItemCard";

import axiosInstance from "utils/apiCalls/axiosInstance";
import useGetJobs from "utils/apiCalls/useGetJobs";
import CustomButton from "utils/UI/CustomButton";
import Typography from "utils/UI/Typography";

import styles from "styles/Home.module.scss";

export default function Home({ initialData, query }) {
  const { isLoading, data, hasMore, getNextPage, search, initiateState } =
    useGetJobs({
      page: 1,
    });

  useEffect(() => {
    initiateState(initialData);
  }, [initialData]);

  return (
    <div className={styles.container}>
      <Filters query={query} doSearch={search} />
      <div className={styles.main}>
        {data.map((job) => (
          <ItemCard key={job.id} item={job} />
        ))}
      </div>
      {/* {!hasMore && <div>has more</div>} */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        {isLoading ? (
          <Typography variant="bold">Loading .....</Typography>
        ) : (
          hasMore && (
            <CustomButton onClick={getNextPage}>Load More</CustomButton>
          )
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { location = "", keyword = "", fullTimeOnly = "" } = query;
  let initialData;
  await axiosInstance
    .get("/v1/jobs/", {
      params: {
        keyword,
        fullTimeOnly: fullTimeOnly === "true",
        location,
        page: 1,
        limit: 3,
      },
    })
    .then((res) => {
      initialData = res.data;
    });

  return {
    props: { initialData, query },
  };
}
