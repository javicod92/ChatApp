import { useFormContext } from "../../../../hooks/useFormContext";
import { RoundedButton } from "../../Buttons";
import { MoreRefreshed, NewChatOutline } from "../../Icons";

import styles from "./ChatlistActions.module.css";

export default function ChatlistActions() {
  const { setIsFormOpen } = useFormContext();

  function handleClick() {
    setIsFormOpen(true);
  }

  return (
    <div className={styles.chatListContainer}>
      <RoundedButton aria-label="Create new message" handleClick={handleClick}>
        <NewChatOutline />
      </RoundedButton>

      <RoundedButton aria-label="Message options">
        <MoreRefreshed />
      </RoundedButton>
    </div>
  );
}
