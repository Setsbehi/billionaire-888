import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

export default function BusinessList() {
  return (
    <div className={styles.businessList}>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  );
}
