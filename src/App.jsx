import SearchBar from "./SearchBar/SearchBar";
import BusinessList from "./BusinessList/BusinessList";
import style from "./App.module.css";
import Yelp from "./utils/Yelp";
import { useState } from "react";

// const business = {
//   imageSrc: "src/SearchBar/background_search_mobile.jpg",
//   id: 'Amara"s cafe',
//   address: "Khan-Uul district",
//   city: "Tokyo",
//   state: "Mongolia",
//   zipCode: "976",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 80,
// };

// // create multiple instances of it to be stored inside of an array.
// const businesses = [business, business, business, business, business, business];

// This array will serve as your hardcoded list of businesses, which can be passed to the BusinessList component.

export default function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
    // console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortBy}`);
  };
  return (
    <div className={style.App}>
      <h1>Billionaire-888</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}
