import { WhatsAppRefreshed } from "../../ui/Icons";
import SearchBar from "../../ui/SearchBar";
import Topbar from "../../ui/Topbar";
import ChatlistActions from "../../ui/Topbar/components/ChatlistActions";
import styles from "./ChatListPanel.module.css";

export default function ChatListPanel() {
  return (
    <div className={styles.chatListContainer}>
      {/** WhatsApp logo and action buttons (Header) */}
      <Topbar>
        <div className={styles.logoContainer}>
          <WhatsAppRefreshed />
        </div>
        <ChatlistActions />
      </Topbar>

      {/* Chat lists */}
      <div className={styles.chatListWrapper}>
        <SearchBar />
      </div>
    </div>
  );
}
