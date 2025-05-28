import RoundedButton from "../../ui/buttons/RoundedButton";
import {
  ChatFilledRefreshed,
  CommunityRefreshed,
  NewsletterOutline,
  SettingsRefreshed,
  StatusRefreshed,
} from "../../ui/icons";
import { ProfileAvatar } from "../../ui/profileAvatar";
import styles from "./Sidebar.module.css";

export default function MiComponente() {
  return (
    <header className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {/* Navigation Buttons */}
        <div className={styles.sidebarWrapper}>
          <nav className={styles.sidebarNav}>
            <RoundedButton>
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
        </div>

        {/* User section */}
        <div className={styles.userSection}>
          <div className={styles.userOptions}>
            <hr className={styles.divider} />
            <RoundedButton>
              <SettingsRefreshed pointerEvents={"none"} />
            </RoundedButton>
            <RoundedButton>
              <ProfileAvatar size="small" url="/Avatars/image_0002.png" />
            </RoundedButton>
          </div>
        </div>
      </div>
    </header>
  );
}
