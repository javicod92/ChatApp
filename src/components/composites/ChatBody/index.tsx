import GeneralBackground from "../../../backgrounds/GeneralBackground";
import { useColorBackground } from "../../../hooks/useColorBackground";
import ContactDescription from "./components/ContactDescription";
import ContactActions from "./components/ContactActions";
import { useSidebar } from "../../../hooks/useSidebar";
import { chatService } from "../../../data/service";
import ChatBubble from "./components/ChatBubble";
import { useQuery } from "@tanstack/react-query";
import styles from "./ChatBody.module.css";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Topbar from "../../ui/Topbar";

type ChatBodyProps = {
  selectedChatId: number;
};

export default function ChatBody({ selectedChatId }: ChatBodyProps) {
  const messagesRef = useRef<HTMLDivElement>(null);
  const { colorBackground } = useColorBackground();
  const { isSidebarOpen } = useSidebar();

  const loadChat = () => chatService.getChatById(selectedChatId);

  const { data: chatData, isLoading } = useQuery({
    queryKey: ["chatBody", selectedChatId],
    queryFn: loadChat,
  });

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [chatData?.messages]);

  if (isLoading) return <p>Cargando...</p>;
  if (!chatData) return null;

  return (
    <main className={styles.chatbodyContainer}>
      <div className={styles.chatbodyWrapper}>
        <GeneralBackground
          colorId={colorBackground.backgroundId}
          patternId={colorBackground.patternId}
        />
        <Topbar>
          <ContactDescription
            avatarUrl={chatData.avatar}
            contactName={chatData.name}
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
            {chatData.messages.map((chat, index) => {
              {
                /* function used for grouping messages from the same referrer */
              }
              const previousMSG = chatData.messages[index - 1];
              const isSameReferrer = previousMSG?.sender === chat.sender;
              const marginTop = isSameReferrer ? "2px" : "12px";

              return (
                <div style={{ marginTop }} key={index}>
                  <ChatBubble
                    id={chat.id}
                    status={chat.status}
                    text={chat.text}
                    timestamp={chat.timestamp}
                    sender={chat.sender}
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
      {isSidebarOpen && <div className={styles.ContainerBlur}></div>}
    </main>
  );
}
