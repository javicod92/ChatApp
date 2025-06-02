import styles from "./ChatBubble.module.css";
import type { ChatMessage } from "../../../../data/userData";
import { TailIn, TailOut } from "../../../ui/Icons";

type ChatBubbleProps = ChatMessage & { hasATail: boolean };

export default function ChatBubble({
  text,
  timestamp,
  sentByMe,
  hasATail,
}: ChatBubbleProps) {
  return (
    <div
      className={`${styles.messageWrapper} ${sentByMe ? styles.sentByMe : ""}`}
    >
      <div className={styles.messageCard}>
        {hasATail &&
          (!sentByMe ? (
            <span className={styles.cardTailLeft}>
              <TailIn />
            </span>
          ) : (
            <span className={styles.cardTailRight}>
              <TailOut />
            </span>
          ))}
        <div className={styles.messageContent}>
          <span>{text}</span>
          <span className={styles.messageDateHidden}>{timestamp}</span>
          <div className={styles.messageDate}>{timestamp}</div>
        </div>
      </div>
    </div>
  );
}
