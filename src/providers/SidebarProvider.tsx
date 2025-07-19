import { useEffect, useRef, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";

export function SidebarProvider({ children }: { children: React.ReactNode }) {
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
}
