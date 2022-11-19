import styles from "styles/Typography.module.scss";
function Typography({ children, variant, noWrap }) {
  const data = () => {
    switch (variant) {
      case "light":
        return <div className={styles.light}>{children}</div>;
      case "middle":
        return <div className={styles.middle}>{children}</div>;
      case "bold":
        return <div className={styles.bold}>{children}</div>;
      default:
        return children;
    }
  };
  return <div style={{ whiteSpace: noWrap && "nowrap" }}>{data()}</div>;
}

export default Typography;
