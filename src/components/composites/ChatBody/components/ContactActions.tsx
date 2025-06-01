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
      <RoundedButton type="large">
        <div className={styles.actionsLargeButton}>
          <VideoCallRefreshed />
          <DownMenu />
        </div>
      </RoundedButton>
      <RoundedButton>
        <SearchRefreshed />
      </RoundedButton>
      <RoundedButton>
        <MoreRefreshed />
      </RoundedButton>
    </div>
  );
}
