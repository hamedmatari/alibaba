import styles from "styles/ItemCard.module.scss";
import calculateDate from "utils/UI/calculateDay";
import Typography from "utils/UI/Typography";

function ItemCard({ item }) {
  return (
    <main className={styles.main}>
      <div
        className={styles.logo}
        style={{ backgroundColor: item.logoBackground }}
      >
        <img src={item.logo} alt="logo" />
      </div>
      <div className={styles.content}>
        <Typography variant="light">
          {calculateDate(item.postedAt)} ago • {item.contract}
        </Typography>
        <Typography variant="bold">{item.position}</Typography>
        <Typography variant="light">{item.company}</Typography>
      </div>
      <div className={styles.location}>
        <Typography variant="middle">{item.location}</Typography>
      </div>
    </main>
  );
}

export default ItemCard;
