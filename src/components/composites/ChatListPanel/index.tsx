import { WhatsAppRefreshed } from "../../ui/Icons";
import SearchBar from "../../ui/SearchBar";
import Topbar from "../../ui/Topbar";
import ChatlistActions from "../../ui/Topbar/components/ChatlistActions";
import FilterChips from "../FilterChips";
import styles from "./ChatListPanel.module.css";
import ChatList from "./components/ChatList";

export default function ChatListPanel() {
  return (
    <div className={styles.sidebar}>
      {/** WhatsApp logo and action buttons (Header) */}
      <Topbar>
        <div className={styles.logo}>
          <WhatsAppRefreshed />
        </div>
        <ChatlistActions />
      </Topbar>

      {/* Chat lists */}
      <div className={styles.content}>
        <SearchBar />
        <FilterChips />
        <ChatList />
      </div>
    </div>
  );
}
