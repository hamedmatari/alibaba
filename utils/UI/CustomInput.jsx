import styles from "styles/Input.module.scss";
function CustomInput({ placeholder = "" }) {
  return (
    <input className={styles.input} type="text" placeholder={placeholder} />
  );
}

export default CustomInput;
