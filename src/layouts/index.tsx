import Sidebar from "../components/composites/Sidebar";
import styles from "./Layout.module.css";
import { Outlet } from "react-router";

// type LayoutProps = {
//   children?: React.ReactNode;
//   selectedChatId?: number;
//   handleSelectedChat?: (id: number) => void;
// };

type LayoutProps = {
  handleToggleSidebar: () => void;
};

export default function Layout({ handleToggleSidebar }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar handleClick={handleToggleSidebar} />

      <Outlet />
    </div>
  );
}
