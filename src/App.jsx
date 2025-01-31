import SearchBar from "./SearchBar/SearchBar";
import BusinessList from "./BusinessList/BusinessList";
import style from "./App.module.css";

export default function App() {
  return (
    <>
      <div className={style.App}>
        <h1>Billionaire-888</h1>
        <SearchBar />
        <BusinessList />
      </div>
    </>
  );
}
