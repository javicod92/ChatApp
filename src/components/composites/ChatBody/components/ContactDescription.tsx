import ProfileAvatar from "../../../ui/ProfileAvatar";
import styles from "./ContactDescription.module.css";

type DescriptionProps = {
  avatarUrl: string;
  contactName: string;
};

export default function ContactDescription({
  avatarUrl,
  contactName,
}: DescriptionProps) {
  return (
    <div className={styles.topProfileDescription}>
      <ProfileAvatar url={avatarUrl} size="medium" />
      <div>
        <span>{contactName}</span>
      </div>
    </div>
  );
}
