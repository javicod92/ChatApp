import { SearchRefreshedThin } from "../Icons";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
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
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
