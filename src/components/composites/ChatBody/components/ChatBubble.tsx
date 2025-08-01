import styles from "./ChatBubble.module.css";
import {
  MsgdblCheck,
  StatusSentSmall,
  TailIn,
  TailOut,
} from "../../../ui/Icons";
import type { ChatMessageProps } from "../../../../types/chat";
import formatTimestampForChat from "../../../../utils/formatTimestampForChat";

type ChatBubbleProps = ChatMessageProps & { hasATail: boolean };

export default function ChatBubble({
  text,
  timestamp,
  sender,
  hasATail,
  status,
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
            {status === "sent" ? (
              <StatusSentSmall />
            ) : status === "delivered" || status === "read" ? (
              <span>
                <MsgdblCheck />
              </span>
            ) : (
              ""
            )}
          </span>
          <div className={styles.messageDate}>
            <span>{formatTimestampForChat(timestamp).time}</span>
            {status === "sent" ? (
              <StatusSentSmall />
            ) : status === "delivered" || status === "read" ? (
              <span>
                <MsgdblCheck
                  className={status === "read" ? styles.readCheck : ""}
                />
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
