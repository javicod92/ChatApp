import formatTimestampForChat from "../../../../../utils/formatTimestampForChat.ts";
import type { chatsDBProps } from "../../../../../types/chat.ts";
import { chatService } from "../../../../../data/service.ts";
import ChatListSkeleton from "../ChatListSkeleton/index.tsx";
import { useQuery } from "@tanstack/react-query";
import styles from "./ChatList.module.css";
import ChatCard from "../ChatCard";

type ChatListProps = {
  searchTerm: string;
};

export default function ChatList({ searchTerm }: ChatListProps) {
  const loadChats = () => chatService.getAllChats();

  const { data: chatList, isLoading } = useQuery({
    queryKey: ["chatList"],
    queryFn: loadChats,
  });

  const filteredChats = chatList?.filter((chat: chatsDBProps) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        {isLoading ? (
          [...Array(15)].map((_, i) => <ChatListSkeleton key={i} />)
        ) : !filteredChats?.length ? (
          <div className={styles.warningContainer}>
            <span>{`No hay coincidencias con: "${searchTerm.trim()}"`}</span>
          </div>
        ) : (
          filteredChats.map((chat: chatsDBProps) => (
            <ChatCard
              key={chat.id}
              id={chat.id}
              avatarURL={chat.avatar}
              userName={highlightText(chat.name, searchTerm)}
              userChatDate={
                formatTimestampForChat(
                  chat.messages[chat.messages.length - 1].timestamp
                ).time
              }
              userLastMessage={chat.messages[chat.messages.length - 1].text}
              messageStatus={chat.messages[chat.messages.length - 1].status}
            />
          ))
        )}
      </div>
    </div>
  );
}
