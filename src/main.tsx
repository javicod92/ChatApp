import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./layouts";
import "./styles/global.css";

// import "./index.css";
// import App from "./App.tsx";
// import IconGallery from "./IconGallery.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <IconGallery /> */}
    <Layout />
  </StrictMode>
);
