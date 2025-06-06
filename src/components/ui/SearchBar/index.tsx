import { SearchRefreshedThin } from "../Icons";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.SearchContainer}>
      <div className={styles.searchWrapper}>
        <div className={styles.SearchInput}>
          <label htmlFor="search-input" className={styles.searchButton}>
            <span aria-hidden="true">
              <SearchRefreshedThin />
            </span>
          </label>
          <input
            id="search-input"
            type="text"
            className={styles.InputField}
            placeholder="Buscar un chat o iniciar uno nuevo"
          />
        </div>
      </div>
    </div>
  );
}
