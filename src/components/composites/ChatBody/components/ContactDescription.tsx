import type { WhatsAppChat } from "../../../../data/userData";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import styles from "./ContactDescription.module.css";

type DescriptionProps = {
  chatData: WhatsAppChat;
};

export default function ContactDescription({ chatData }: DescriptionProps) {
  return (
    <div className={styles.topProfileDescription}>
      <ProfileAvatar url={chatData.userAvatar} size="medium" />
      <div>
        <span>{chatData.contactName}</span>
      </div>
    </div>
  );
}
