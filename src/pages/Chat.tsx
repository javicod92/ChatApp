import { useParams } from "react-router";
import ChatBody from "../components/composites/ChatBody";

export default function Chat() {
  const { id } = useParams();
  const selectedId = id ? Number(id) : 0;

  return <ChatBody selectedChatId={selectedId} />;
}

// In this code, I can improve it by adding a .filter or .some methods to verify
// if the current chat exist in whatsappChats list when user write the path
