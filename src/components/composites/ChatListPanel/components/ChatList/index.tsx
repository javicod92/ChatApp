import ChatCard from "../ChatCard";
import { whatsappChats } from "../../../../../data/userData.ts";
import styles from "./ChatList.module.css";

type ChatListProps = {
  selectedChatId: number;
  handleSelectedChat: (id: number) => void;
  searchTerm: string;
};

export default function ChatList({
  selectedChatId,
  handleSelectedChat,
  searchTerm,
}: ChatListProps) {
  const filteredChats = whatsappChats.filter((chat) =>
    chat.contactName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {filteredChats.map((chat) => (
          <ChatCard
            key={chat.id}
            handleClick={() => handleSelectedChat(chat.id)}
            avatarURL={chat.userAvatar}
            userName={chat.contactName}
            userChatDate={
              chat.chatHistory[chat.chatHistory.length - 1].timestamp
            }
            userLastMessage={chat.chatHistory[chat.chatHistory.length - 1].text}
            isSelected={selectedChatId === chat.id}
            messageStatus={chat.messageStatus}
          />
        ))}
      </div>
    </div>
  );
}
