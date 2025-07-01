import { useEffect, useRef, useState } from "react";
import ChatListPanel from "../components/composites/ChatListPanel";
import Sidebar from "../components/composites/Sidebar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  selectedChatId: number;
  handleSelectedChat: (id: number) => void;
};

export default function Layout({
  children,
  selectedChatId,
  handleSelectedChat,
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const prevWidth = useRef(window.innerWidth);

  // Function used to close the Sidebar component between screen size changes
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (prevWidth.current > 1024 && width <= 1024) {
        setIsSidebarOpen(false);
      }
      prevWidth.current = width;
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleToggleSidebar() {
    setIsSidebarOpen((prevState) => !prevState);
  }

  return (
    <div className={styles.container}>
      <Sidebar handleClick={handleToggleSidebar} />
      <ChatListPanel
        isSidebarOpen={isSidebarOpen}
        selectedChatId={selectedChatId}
        handleSelectedChat={handleSelectedChat}
      />
      {children}
    </div>
  );
}
