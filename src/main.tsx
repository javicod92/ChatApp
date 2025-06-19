import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layouts";
import "./styles/global.css";
import ChatBody from "./components/composites/ChatBody";
import { whatsappChats } from "./data/userData";

// This import allow you to view all icons saved as React component
// import IconGallery from "./IconGallery.tsx";

export function App() {
  const [selectedChatId, setSelectedChatId] = useState(whatsappChats[0].id);

  function handleSelectedChat(id: number) {
    setSelectedChatId(id);
  }

  return (
    <Layout
      selectedChatId={selectedChatId}
      handleSelectedChat={handleSelectedChat}
    >
      <ChatBody selectedChatId={selectedChatId} />
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <IconGallery /> */}
    <App />
  </StrictMode>
);

window.onload = function () {
  const container = document.getElementById("messagesContainer");
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};
