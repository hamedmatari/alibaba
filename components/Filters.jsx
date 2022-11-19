import { useEffect, useState } from "react";

import { SearchIcon, LocationIcon } from "components/icons/Icons";

import styles from "styles/Filters.module.scss";

import Typography from "utils/UI/Typography";
import Checkbox from "utils/UI/Checkbox";
import CustomButton from "utils/UI/CustomButton";
import CustomInput from "utils/UI/CustomInput";
import { useRouter } from "next/router";

function Filters({ doSearch, query }) {
  const [state, setState] = useState({
    location: "",
    keyword: "",
    fullTimeOnly: false,
  });
  const router = useRouter();
  useEffect(() => {
    // console.log("here", query);
    setState({
      location: query.location,
      keyword: query.keyword,
      fullTimeOnly: query.fullTimeOnly === "true",
    });
  }, [query]);

  const handleSearch = () => {
    router.replace({
      query: {
        ...router.query,
        location: state.location,
        keyword: state.keyword,
        fullTimeOnly: state.fullTimeOnly,
      },
    });
    doSearch(state);
  };
  return (
    <main className={styles.main}>
      <div className={styles.company}>
        <SearchIcon />
        {/* <Typography variant="light">Find by title, companies...</Typography> */}
        <CustomInput
          value={state.keyword}
          onChange={(value) =>
            setState((prev) => ({ ...prev, keyword: value }))
          }
          placeholder="Find by title, companies..."
        />
      </div>
      <div className={styles.location}>
        <LocationIcon />
        {/* <Typography variant="light">Find by location</Typography> */}
        <CustomInput
          value={state.location}
          onChange={(value) =>
            setState((prev) => ({ ...prev, location: value }))
          }
          placeholder="Find by location"
        />
      </div>
      <div className={styles.btnCheckbox}>
        <Checkbox
          value={state.fullTimeOnly}
          onChange={(value) =>
            setState((prev) => ({ ...prev, fullTimeOnly: value }))
          }
        />
        <Typography noWrap variant="middle">
          Full Time Only
        </Typography>
        <CustomButton onClick={handleSearch}>Search</CustomButton>
      </div>
    </main>
  );
}

export default Filters;
