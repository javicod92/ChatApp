export type ChatMessageProps = {
  id: number;
  text: string;
  timestamp: Date | string;
  sender: "contact" | "me";
  status: "delivered" | "read";
};

export type chatsDBProps = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: Date | string;
  unreadCount: number;
  isOnline: boolean;
  lastSeen?: Date | string;
  messages: ChatMessageProps[];
};
