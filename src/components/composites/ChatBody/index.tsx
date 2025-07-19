import Topbar from "../../ui/Topbar";
import styles from "./ChatBody.module.css";
import { whatsappChats } from "../../../data/userData";
import ContactDescription from "./components/ContactDescription";
import ContactActions from "./components/ContactActions";
import GeneralBackground from "../../../backgrounds/GeneralBackground";
import ChatBubble from "./components/ChatBubble";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import { useColorBackground } from "../../../hooks/useColorBackground";

type ChatBodyProps = {
  selectedChatId: number;
};

export default function ChatBody({ selectedChatId }: ChatBodyProps) {
  const chatData = whatsappChats.find((chat) => chat.id === selectedChatId);
  const messagesRef = useRef<HTMLDivElement>(null);
  const { colorBackground } = useColorBackground();

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [chatData?.chatHistory]);

  if (!chatData) return null;

  return (
    <main className={styles.chatbodyContainer}>
      <div className={styles.chatbodyWrapper}>
        <GeneralBackground id={colorBackground} />
        <Topbar>
          <ContactDescription
            avatarUrl={chatData.userAvatar}
            contactName={chatData.contactName}
          />
          <ContactActions />
        </Topbar>

        {/* IndividualChat Component */}
        <div
          className={styles.messagesContainer}
          id="messagesContainer"
          ref={messagesRef}
        >
          <div className={styles.messagesContent}>
            {chatData.chatHistory.map((chat, index) => {
              {
                /* function used for grouping messages from the same referrer */
              }
              const previousMSG = chatData.chatHistory[index - 1];
              const isSameReferrer = previousMSG?.sentByMe === chat.sentByMe;
              const marginTop = isSameReferrer ? "2px" : "12px";

              return (
                <div style={{ marginTop }} key={index}>
                  <ChatBubble
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
