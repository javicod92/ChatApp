import { StatusdblCheck } from "../../../../ui/Icons";
import ProfileAvatar from "../../../../ui/ProfileAvatar";
import styles from "./ChatCard.module.css";

type ChatcardProps = {
  avatarURL: string;
  userName: React.ReactNode;
  userChatDate: string;
  userLastMessage: string;
  isSelected?: boolean;
  messageStatus?: "sent" | "delivered" | "read";
  handleClick?: () => void;
};

export default function ChatCard(props: ChatcardProps) {
  const {
    avatarURL,
    userName,
    userChatDate,
    userLastMessage,
    isSelected,
    messageStatus,
    handleClick,
  } = props;

  return (
    <div
      className={`${styles.chatCard} ${isSelected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      <div className={styles.avatarContainer}>
        <ProfileAvatar url={avatarURL} size="large" />
      </div>
      <div className={styles.cardDescription}>
        <div className={styles.descriptionContact}>
          <div className={styles.contact}>
            <span>{userName}</span>
          </div>
          <div className={styles.time}>{userChatDate}</div>
        </div>
        <div className={styles.lastMessage}>
          <div
            className={`${styles.checkIcon} ${
              messageStatus === "read" ? styles.messageRead : ""
            }`}
          >
            <StatusdblCheck />
          </div>
          <span>{userLastMessage}</span>
        </div>
      </div>
    </div>
  );
}
