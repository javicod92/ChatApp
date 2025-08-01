export type ChatMessageProps = {
  id: number;
  text: string;
  timestamp: Date;
  sender: "contact" | "me";
  status: "delivered" | "read" | "sent";
};

export type chatsDBProps = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  isOnline: boolean;
  lastSeen?: string;
  messages: ChatMessageProps[];
};
