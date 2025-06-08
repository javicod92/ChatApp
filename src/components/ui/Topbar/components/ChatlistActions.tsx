import { RoundedButton } from "../../Buttons";
import { MoreRefreshed, NewChatOutline } from "../../Icons";

import styles from "./ChatlistActions.module.css";

export default function ChatlistActions() {
  return (
    <div className={styles.chatListContainer}>
      <RoundedButton aria-label="Create new message">
        <NewChatOutline />
      </RoundedButton>

      <RoundedButton aria-label="Message options">
        <MoreRefreshed />
      </RoundedButton>
    </div>
  );
}
