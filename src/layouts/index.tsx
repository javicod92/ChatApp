import Sidebar from "../components/composites/Sidebar";
import styles from "./Layout.module.css";
import { Outlet } from "react-router";
import { useSidebar } from "../context/SidebarContext";

// type LayoutProps = {
//   children?: React.ReactNode;
//   selectedChatId?: number;
//   handleSelectedChat?: (id: number) => void;
// };

export default function Layout() {
  const { handleToggleSidebar } = useSidebar();

  return (
    <div className={styles.container}>
      <Sidebar handleClick={handleToggleSidebar} />

      <Outlet />
    </div>
  );
}
