import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode, useEffect, useRef, useState } from "react";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Layout from "./layouts";
import "./styles/global.css";

export function App() {
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
    <BrowserRouter>
      <Routes>
        <Route element={<Layout handleToggleSidebar={handleToggleSidebar} />}>
          <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} />}>
            <Route path="/chat/:id" element={<Chat />} />
          </Route>
        </Route>
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <IconGallery /> */}
    <App />
  </StrictMode>
);
