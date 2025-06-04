import { RoundedButton } from "../../../ui/Buttons";
import {
  DownMenu,
  MoreRefreshed,
  SearchRefreshed,
  VideoCallRefreshed,
} from "../../../ui/Icons";
import styles from "./ContactActions.module.css";

export default function ContactActions() {
  return (
    <div className={styles.topProfileActions}>
      <RoundedButton variant="large" aria-label="Open call application">
        <div className={styles.actionsLargeButton}>
          <VideoCallRefreshed />
          <DownMenu />
        </div>
      </RoundedButton>

      <RoundedButton aria-label="Search in messages">
        <SearchRefreshed />
      </RoundedButton>

      <RoundedButton aria-label="Messages options">
        <MoreRefreshed />
      </RoundedButton>
    </div>
  );
}
