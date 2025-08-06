import { Suspense, useState } from "react";
import { WhatsAppRefreshed } from "../../ui/Icons";
import SearchBar from "../../ui/SearchBar";
import Topbar from "../../ui/Topbar";
import ChatlistActions from "../../ui/Topbar/components/ChatlistActions";
import styles from "./ChatListPanel.module.css";
import { ChatList, FilterChips } from "./components";
import ContentBox from "../../ui/ContentBox";
import ChatListSkeleton from "./components/ChatListSkeleton";
import { ErrorBoundary } from "react-error-boundary";

export type ChatListPanelProps = {
  isSidebarOpen: boolean;
  selectedChatId?: number;
  handleSelectedChat?: (id: number) => void;
};

export default function ChatListPanel() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContentBox>
      {/* WhatsApp logo and action buttons (Header) */}
      <Topbar>
        <div className={styles.logo}>
          <WhatsAppRefreshed />
        </div>
        <ChatlistActions />
      </Topbar>

      {/* Chat lists */}
      <div className={styles.content}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterChips />

        <div className={styles.listContainer}>
          <div className={styles.list}>
            <ErrorBoundary FallbackComponent={FallbackErrorChatList}>
              <Suspense
                fallback={[...Array(6)].map((_, index) => (
                  <ChatListSkeleton key={index} />
                ))}
              >
                <ChatList searchTerm={searchTerm} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </ContentBox>
  );
}

function FallbackErrorChatList({ error }: { error: Error }) {
  return (
    <div className={styles.errorContainer}>
      <h3>¡Ups! Ocurrió un error al cargar los chats.</h3>
      <pre>{error.message}</pre>
    </div>
  );
}
