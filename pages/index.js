import Filters from "components/Filters";
import ItemCard from "components/ItemCard";
import styles from "styles/Home.module.scss";
import axiosInstance from "utils/apiCalls/axiosInstance";
import useGetJobs from "utils/apiCalls/useGetJobs";
import CustomButton from "utils/UI/CustomButton";
import Typography from "utils/UI/Typography";

export default function Home({ initialData }) {
  const { isLoading, data, hasMore, getNextPage } = useGetJobs({
    page: 1,
  });
  // console.log(hasMore);
  return (
    <div className='container'>
      <Filters />
      <div className={styles.main}>
        {[...initialData.items, ...data].map((job) => (
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

export async function getServerSideProps(context) {
  let initialData;
  await axiosInstance
    .get("/v1/jobs/", {
      params: {
        page: 1,
        limit: 3,
      },
    })
    .then((res) => {
      initialData = res.data.result;
    });

  return {
    props: { initialData },
  };
}
