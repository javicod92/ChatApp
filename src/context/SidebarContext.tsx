import { createContext } from "react";

type SidebarContextType = {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
