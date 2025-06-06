import ChatCard from "../ChatCard";
import { whatsappChats } from "../../../../../data/userData.ts";
import styles from "./ChatList.module.css";

export default function ChatList() {
  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {whatsappChats.map((chat) => (
          <ChatCard
            key={chat.id}
            avatarURL={chat.userAvatar}
            userName={chat.contactName}
            userChatDate={
              chat.chatHistory[chat.chatHistory.length - 1].timestamp
            }
            userLastMessage={chat.chatHistory[chat.chatHistory.length - 1].text}
            isSelected={chat.isSelected}
            messageStatus={chat.messageStatus}
          />
        ))}
      </div>
    </div>
  );
}
