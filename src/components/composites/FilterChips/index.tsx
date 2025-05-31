import { PillButton } from "../../ui/Buttons";

import styles from "./FilterChips.module.css";

export default function FilterChips() {
  return (
    <div className={styles.filterContainer}>
      <PillButton isSelected={true}>Todos</PillButton>
      <PillButton>No leidos</PillButton>
      <PillButton>Favoritos</PillButton>
      <PillButton>Grupos</PillButton>
    </div>
  );
}
