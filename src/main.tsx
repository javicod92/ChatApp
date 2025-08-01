import { SidebarProvider } from "./providers/SidebarProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import { StrictMode } from "react";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Layout from "./layouts";
import "./styles/global.css";
import { queryClient, QueryClientProvider } from "./lib/react-query";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}>
            <Route path="/chat/:id" element={<Chat />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <IconGallery /> */}
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </QueryClientProvider>
  </StrictMode>
);
