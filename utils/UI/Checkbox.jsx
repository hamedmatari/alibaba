import { useEffect, useState } from "react";
import styles from "styles/Checkbox.module.scss";

function Checkbox({ checked = false }) {
  const [state, setState] = useState(checked);
  // useEffect(() => {
  //     setState(checked)
  // },[checked])
  return (
    <div className={styles.main}>
      <label className={styles.container}>
        sa
        <input
          type="checkbox"
          checked={state}
          onChange={(e) => setState(e.target.checked)}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}

export default Checkbox;
