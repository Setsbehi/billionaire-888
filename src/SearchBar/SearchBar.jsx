import { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most reviewed": "review_count",
};

export default function SearchBar({ searchYelp }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  function handleSearch(event) {
    event.preventDefault();
    searchYelp(term, location, sortBy);
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function getSortByClass(sortByOption) {
    if (sortBy === sortByOption) {
      return styles.active;
    }
  }
  function handleSortByChange(sortByOption) {
    setSortBy(sortByOption);
  }

  function renderSortByObtions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOption)}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByObtions()}</ul>
      </div>
      <form onSubmit={handleSearch}>
        <div className={styles.SearchBarField}>
          <input
            type="text"
            placeholder="Search Business..."
            onChange={handleTermChange}
          />
          <input placeholder="where" onChange={handleLocationChange} />
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type="submit">Let's go</button>
        </div>
      </form>
    </div>
  );
}

// Searching Yelp with food, Italy, best_match
// App.jsx:24 Searching Yelp with food, Italy, rating
// App.jsx:24 Searching Yelp with food, Italy, review_count
