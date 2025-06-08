import ChatListPanel from "../components/composites/ChatListPanel";
import Sidebar from "../components/composites/Sidebar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ChatListPanel />
      {children}
    </div>
  );
}
