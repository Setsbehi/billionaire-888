import styles from "./Business.module.css";

const business = {
  imageSrc: "src/SearchBar/background_search_mobile.jpg",
  name: 'Amara"s cafe',
  address: "Khan-Uul district",
  city: "Tokyo",
  state: "Mongolia",
  zipCode: "976",
  category: "Italian",
  rating: 4.5,
  reviewCount: 80,
};

export default function Business() {
  return (
    <div className={styles.business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt="our future cafe" />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.businessInformation}>
        <div className={styles.businessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className={styles.businessReviews}>
          <h3>{business.category.toLocaleUpperCase()}</h3>
          <h3 className={styles.rating}>{`${business.rating}`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
}
