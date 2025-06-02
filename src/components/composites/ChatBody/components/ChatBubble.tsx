import styles from "./ChatBubble.module.css";
import type { ChatMessage } from "../../../../data/userData";

export default function ChatBubble({ text, timestamp, sentByMe }: ChatMessage) {
  return (
    <div
      className={`${styles.messageWrapper} ${sentByMe ? styles.sentByMe : ""}`}
    >
      <div className={styles.messageCard}>
        <div className={styles.messageContent}>
          <span className={styles.messageContent}>{text}</span>
          <span className={styles.messageDateHidden}>{timestamp}</span>
          <div className={styles.messageDate}>{timestamp}</div>
        </div>
      </div>
    </div>
  );
}
