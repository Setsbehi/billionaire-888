import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

export default function BusinessList({ businesses }) {
  return (
    <div className={styles.businessList}>
      {businesses.map((business) => {
        return <Business business={business} key={business.id} />;
      })}
    </div>
  );
}
