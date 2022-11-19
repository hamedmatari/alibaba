import styles from "styles/Input.module.scss";
function CustomInput({ placeholder = "", value = "", onChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default CustomInput;
