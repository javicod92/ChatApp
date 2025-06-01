import Topbar from "../../ui/Topbar";
import styles from "./ChatBody.module.css";
import { whatsappChats } from "../../../data/userData";
import ContactDescription from "./components/ContactDescription";
import ContactActions from "./components/ContactActions";
import GeneralBackground from "../../../backgrounds/GeneralBackground";

export default function ChatBody() {
  return (
    <main className={styles.chatbodyContainer}>
      <div className={styles.chatbodyWrapper}>
        <Topbar>
          <ContactDescription chatData={whatsappChats[0]} />
          <ContactActions />
        </Topbar>
        <div className={styles.background}>
          <GeneralBackground />
        </div>
      </div>
    </main>
  );
}
