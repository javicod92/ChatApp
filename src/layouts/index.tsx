import ChatListPanel from "../components/composites/ChatListPanel";
import Sidebar from "../components/composites/Sidebar";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ChatListPanel />
    </div>
  );
}
