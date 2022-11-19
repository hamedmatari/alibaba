import CustomButton from "utils/UI/CustomButton";

import styles from "styles/job.module.scss";
import Typography from "utils/UI/Typography";
import useGetJob from "utils/apiCalls/useGetJob";
import { useRouter } from "next/router";
import calculateDate from "utils/UI/calculateDay";

function Job() {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, data } = useGetJob({ id });
  console.log("data", data);
  if (isLoading) return <Typography variant="bold">Loading...</Typography>;
  return (
    <div className="container-md">
      {/* Header */}
      <div className={styles.header}>
        <div className={styles["header-box-container"]}>
          <div
            className={styles["header-box"]}
            // style={{ backgroundColor: "red !important" }}
            style={{ backgroundColor: data.logoBackground }}
          >
            <img src={data.logo} alt="logo" />
          </div>
        </div>

        <div
          className={`${styles["header-content"]} ${styles["card-padding"]}`}
        >
          <div className={`${styles["header-text"]}`}>
            <Typography variant="bold" className={styles.title}>
              {data.company}
            </Typography>
            <Typography variant="light" className={styles["text-light"]}>
              {data.apply}
            </Typography>
          </div>
          <CustomButton variant="light" className={styles["compony-btn"]}>
            Company Site
          </CustomButton>
        </div>
      </div>

      {/* body */}
      <div className={`${styles.body} ${styles["card-padding"]}`}>
        {/* header */}
        <div className={`${styles["body-content"]} mb-2`}>
          <div className={styles["body-content-left"]}>
            <div className={styles.time}>
              {calculateDate(data.postedAt)} . {data.contract}
            </div>
            <Typography variant="bold" className={styles["body-title"]}>
              {data.position}
            </Typography>
            <div className={styles.country} style={{ marginTop: "10px" }}>
              <Typography variant="middle">{data.location}</Typography>
            </div>
          </div>

          <CustomButton className={styles["body-content-right"]}>
            Apply Now
          </CustomButton>
        </div>
        <p>{data.description}</p>

        <div>
          <Typography variant="bold">Requirement</Typography>
          <p>{data?.requirements?.content}</p>
        </div>
        <div>
          <Typography variant="bold">What you will do</Typography>
          <p>{data?.requirements?.content}</p>
        </div>
      </div>

      <div className={styles["action-bottom"]}>
        <div className={styles["action-bottom-container"]}>
          <div className={styles["body-content"]}>
            <div className={styles["body-content-left"]}>
              <Typography variant="bold" className={styles["body-title"]}>
                {data.position}
              </Typography>
              <div className={styles.time}>{data.company}</div>
            </div>

            <CustomButton className={styles["body-content-right"]}>
              Apply Now
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
