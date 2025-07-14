import { NavLink, useNavigate } from "react-router";
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
  id?: number;
};

export default function ChatCard(props: ChatcardProps) {
  const {
    avatarURL,
    userName,
    userChatDate,
    userLastMessage,
    messageStatus,
    id,
  } = props;

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/chat/${id}`);
  }

  return (
    <NavLink
      to={`/chat/${id}`}
      className={({ isActive }) =>
        `${styles.chatCard} ${isActive ? styles.selected : ""}`
      }
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
    </NavLink>
  );
}
