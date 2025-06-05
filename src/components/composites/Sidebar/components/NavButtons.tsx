import { RoundedButton } from "../../../ui/Buttons";
import {
  ChatFilledRefreshed,
  StatusRefreshed,
  NewsletterOutline,
  CommunityRefreshed,
} from "../../../ui/Icons";

import styles from "./NavButtons.module.css";

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;
  sidebar.style.left = sidebar.style.left === "64px" ? "-100%" : "64px";
}

export default function NavButtons() {
  return (
    <nav className={styles.navButtons}>
      <RoundedButton
        isSelected={true}
        handleClick={toggleSidebar}
        aria-label="Open chat list"
      >
        <ChatFilledRefreshed pointerEvents="none" />
      </RoundedButton>

      <RoundedButton aria-label="Open states">
        <StatusRefreshed pointerEvents="none" />
      </RoundedButton>

      <RoundedButton aria-label="Open channels">
        <NewsletterOutline pointerEvents="none" />
      </RoundedButton>

      <RoundedButton aria-label="Open Community">
        <CommunityRefreshed pointerEvents="none" />
      </RoundedButton>
    </nav>
  );
}
