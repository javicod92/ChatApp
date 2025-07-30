import styles from "./ChatListSkeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonAvatar} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonLineShort} />
        <div className={styles.skeletonLineLong} />
      </div>
    </div>
  );
}
