import styles from "./ChatListSkeleton.module.css";

export default function Skeleton() {
  return (
    <div className={`${styles.selected} ${styles.chatCard}`}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}></div>
      </div>
      <div className={styles.cardDescription}>
        <div className={styles.descriptionContact}>
          <div className={styles.contact}>
            <div></div>
          </div>
        </div>
        <div className={styles.lastMessage}>
          <div></div>
        </div>
      </div>
    </div>
  );
}
