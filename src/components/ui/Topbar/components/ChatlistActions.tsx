import { RoundedButton } from "../../Buttons";
import { MoreRefreshed, NewChatOutline } from "../../Icons";

import styles from "./ChatlistActions.module.css";

export default function ChatlistActions() {
  return (
    <div className={styles.chatListContainer}>
      <RoundedButton>
        <NewChatOutline />
      </RoundedButton>
      <RoundedButton>
        <MoreRefreshed />
      </RoundedButton>
    </div>
  );
}
