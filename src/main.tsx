import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Layout from "./layouts";
import "./styles/global.css";
import { SidebarProvider } from "./context/SidebarContext";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}>
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
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>
);
