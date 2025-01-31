import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most reviewed": "review_count",
};

export default function SearchBar() {
  const renderSortByObtions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByObtions()}</ul>
      </div>
      <div className={styles.SearchBarField}>
        <input placeholder="Search Business"/>
        <input placeholder="where" />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a>Let's go</a>
      </div>
    </div>
  )
}
