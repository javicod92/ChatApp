export type ChatMessageProps = {
  id: number;
  text: string;
  timestamp: string;
  sender: "contact" | "me";
  status: "delivered" | "read";
};

export type chatsDBProps = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  lastSeen?: string;
  messages: ChatMessageProps[];
};
