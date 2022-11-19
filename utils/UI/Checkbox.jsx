import { useEffect, useState } from "react";
import styles from "styles/Checkbox.module.scss";

function Checkbox({ value = "false", onChange }) {
  return (
    <div className={styles.main}>
      <label className={styles.container}>
        .
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}

export default Checkbox;
