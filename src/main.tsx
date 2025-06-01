import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layouts";
import "./styles/global.css";
import ChatBody from "./components/composites/ChatBody";

// This import allow you to view all icons saved as React component
// import IconGallery from "./IconGallery.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <IconGallery /> */}
    <Layout>
      <ChatBody />
    </Layout>
  </StrictMode>
);
