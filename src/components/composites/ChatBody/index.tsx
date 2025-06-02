import Topbar from "../../ui/Topbar";
import styles from "./ChatBody.module.css";
import { whatsappChats } from "../../../data/userData";
import ContactDescription from "./components/ContactDescription";
import ContactActions from "./components/ContactActions";
import GeneralBackground from "../../../backgrounds/GeneralBackground";
import ChatBubble from "./components/ChatBubble";
import Footer from "./components/Footer";

export default function ChatBody() {
  const chatData = whatsappChats[0];

  return (
    <main className={styles.chatbodyContainer}>
      <div className={styles.chatbodyWrapper}>
        <GeneralBackground />
        <Topbar>
          <ContactDescription
            avatarUrl={chatData.userAvatar}
            contactName={chatData.contactName}
          />
          <ContactActions />
        </Topbar>

        {/* IndividualChat Component */}
        <div className={styles.messagesContainer} id="messagesContainer">
          <div className={styles.messagesContent}>
            {chatData.chatHistory.map((chat, index) => {
              {
                /* function used for grouping messages from the same referrer */
              }
              const previousMSG = chatData.chatHistory[index - 1];
              const isSameReferrer = previousMSG?.sentByMe === chat.sentByMe;
              const marginTop = isSameReferrer ? "2px" : "12px";

              return (
                <div style={{ marginTop }}>
                  <ChatBubble
                    key={index}
                    text={chat.text}
                    timestamp={chat.timestamp}
                    sentByMe={chat.sentByMe}
                    hasATail={!isSameReferrer}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Component */}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </main>
  );
}
