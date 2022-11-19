import styles from "styles/Button.module.scss";

function CustomButton({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.btn} role="button">
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
