import { StatusdblCheck } from "../../../../ui/Icons";
import ProfileAvatar from "../../../../ui/ProfileAvatar";

import styles from "./ChatList.module.css";

export default function ChatList() {
  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        <div className={styles.chatCard}>
          <div className={styles.avatarContainer}>
            <ProfileAvatar url="/Avatars/image_0000.png" size="large" />
          </div>
          <div className={styles.cardDescription}>
            <div className={styles.descriptionContact}>
              <div className={styles.contact}>
                <span>Pablo Demarchi</span>
              </div>
              <div className={styles.time}>5.27 p.m</div>
            </div>
            <div className={styles.lastMessage}>
              <StatusdblCheck />
              <span>jajajaja</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
