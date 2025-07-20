import { useState } from "react";
import { WhatsAppRefreshed } from "../../ui/Icons";
import SearchBar from "../../ui/SearchBar";
import Topbar from "../../ui/Topbar";
import ChatlistActions from "../../ui/Topbar/components/ChatlistActions";
import styles from "./ChatListPanel.module.css";
import { ChatList, FilterChips } from "./components";
import { useSidebar } from "../../../hooks/useSidebar";

export type ChatListPanelProps = {
  isSidebarOpen: boolean;
  selectedChatId?: number;
  handleSelectedChat?: (id: number) => void;
};

export default function ChatListPanel() {
  const { isSidebarOpen } = useSidebar();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""}`}
      id="sidebar"
    >
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
        <ChatList searchTerm={searchTerm} />
      </div>
    </div>
  );
}
