import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface SidebarContextType {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
    <SidebarContext.Provider value={{ isSidebarOpen, handleToggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
