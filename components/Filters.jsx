import styles from "styles/Filters.module.scss";
import { SearchIcon, LocationIcon } from "components/icons/Icons";
import Typography from "utils/UI/Typography";
import Checkbox from "utils/UI/Checkbox";
import CustomButton from "utils/UI/CustomButton";
import CustomInput from "utils/UI/CustomInput";
function Filters() {
  return (
    <main className={styles.main}>
      <div className={styles.company}>
        <SearchIcon />
        {/* <Typography variant="light">Find by title, companies...</Typography> */}
        <CustomInput placeholder="Find by title, companies..." />
      </div>
      <div className={styles.location}>
        <LocationIcon />
        {/* <Typography variant="light">Find by location</Typography> */}
        <CustomInput placeholder="Find by location" />
      </div>
      <div className={styles.btnCheckbox}>
        <Checkbox checked />
        <Typography noWrap variant="middle">
          Full Time Only
        </Typography>
        <CustomButton>Search</CustomButton>
      </div>
    </main>
  );
}

export default Filters;
