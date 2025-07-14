import ChatCard from "../ChatCard";
import { whatsappChats } from "../../../../../data/userData.ts";
import styles from "./ChatList.module.css";

type ChatListProps = {
  searchTerm: string;
};

export default function ChatList({ searchTerm }: ChatListProps) {
  const filteredChats = whatsappChats.filter((chat) =>
    chat.contactName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function used to highlight text
  function highlightText(text: string, search: string) {
    if (!search.trim()) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {!filteredChats.length ? (
          <div className={styles.warningContainer}>
            <span>{`No hay coincidencias con: "${searchTerm.trim()}"`}</span>
          </div>
        ) : (
          filteredChats.map((chat) => (
            <ChatCard
              key={chat.id}
              id={chat.id}
              avatarURL={chat.userAvatar}
              userName={highlightText(chat.contactName, searchTerm)}
              userChatDate={
                chat.chatHistory[chat.chatHistory.length - 1].timestamp
              }
              userLastMessage={
                chat.chatHistory[chat.chatHistory.length - 1].text
              }
              messageStatus={chat.messageStatus}
            />
          ))
        )}
      </div>
    </div>
  );
}
