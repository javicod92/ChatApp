import styles from "./ChatBubble.module.css";
import { TailIn, TailOut } from "../../../ui/Icons";
import type { ChatMessageProps } from "../../../../types/chat";
import formatTimestampForChat from "../../../../utils/formatTimestampForChat";

type ChatBubbleProps = ChatMessageProps & { hasATail: boolean };

export default function ChatBubble({
  text,
  timestamp,
  sender,
  hasATail,
}: ChatBubbleProps) {
  return (
    <div
      className={`${styles.messageWrapper} ${
        sender === "me" ? styles.sentByMe : ""
      }`}
    >
      <div className={styles.messageCard}>
        {hasATail &&
          (!(sender === "me") ? (
            <span className={styles.cardTailLeft} aria-hidden="true">
              <TailIn />
            </span>
          ) : (
            <span className={styles.cardTailRight} aria-hidden="true">
              <TailOut />
            </span>
          ))}
        <div className={styles.messageContent}>
          <span>{text}</span>
          <span className={styles.messageDateHidden}>
            {formatTimestampForChat(timestamp).time}
          </span>
          <div className={styles.messageDate}>
            {formatTimestampForChat(timestamp).time}
          </div>
        </div>
      </div>
    </div>
  );
}
