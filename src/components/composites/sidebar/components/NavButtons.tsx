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
      <RoundedButton isSelected={true} handleClick={toggleSidebar}>
        <ChatFilledRefreshed pointerEvents={"none"} />
      </RoundedButton>
      <RoundedButton>
        <StatusRefreshed pointerEvents={"none"} />
      </RoundedButton>
      <RoundedButton>
        <NewsletterOutline pointerEvents={"none"} />
      </RoundedButton>
      <RoundedButton>
        <CommunityRefreshed pointerEvents={"none"} />
      </RoundedButton>
    </nav>
  );
}
