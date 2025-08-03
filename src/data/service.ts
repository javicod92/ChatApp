import { queryClient } from "../lib/react-query";
import type { ChatMessageProps, chatsDBProps } from "../types/chat";
import { chatsDB, getNextChatId, getNextMessageId } from "./chatsDB";

// Simulate API delay
const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API service for chat operations
export const chatService = {
  // GET all chats
  async getAllChats(): Promise<chatsDBProps[]> {
    await delay(200);
    const stored = localStorage.getItem("chatsDB");
    const chats: chatsDBProps[] = stored ? JSON.parse(stored) : [...chatsDB];

    // Sort by last message time (most recent first)
    return chats.sort(
      (a, b) =>
        new Date(b.lastMessageTime).getTime() -
        new Date(a.lastMessageTime).getTime()
    );
  },

  // GET chat by ID
  async getChatById(id: number): Promise<chatsDBProps> {
    await delay(100);
    const stored = localStorage.getItem("chatsDB");
    const chats = stored ? JSON.parse(stored) : chatsDB;
    const chat = chats.find((c: chatsDBProps) => c.id === Number(id));
    if (!chat) {
      throw new Error("Chat not found");
    }
    return chat;
  },

  // GET messages for a chat
  async getMessages(chatId: number) {
    await delay(150);
    const chat = await this.getChatById(chatId);
    return chat.messages || [];
  },

  // POST - Send new message
  async sendMessage(
    chatId: number,
    messageText: string
  ): Promise<ChatMessageProps> {
    await delay(200);
    const stored = localStorage.getItem("chatsDB");
    const chats: chatsDBProps[] = stored ? JSON.parse(stored) : [...chatsDB];

    const chatIndex = chats.findIndex((c) => c.id === Number(chatId));
    if (chatIndex === -1) {
      throw new Error("Chat not found");
    }

    const newMessage: ChatMessageProps = {
      id: getNextMessageId(Number(chatId)),
      text: messageText,
      timestamp: new Date(),
      sender: "me",
      status: "sent",
    };

    chats[chatIndex].messages.push(newMessage);
    chats[chatIndex].lastMessage = messageText;
    chats[chatIndex].lastMessageTime = new Date();

    localStorage.setItem("chatsDB", JSON.stringify(chats));

    // Simulate message status updates
    setTimeout(() => {
      this.updateMessageStatus(chatId, newMessage.id, "delivered");
      queryClient.invalidateQueries({ queryKey: ["chatBody"] });
      queryClient.invalidateQueries({ queryKey: ["chatList"] });
    }, 1000);
    setTimeout(() => {
      this.updateMessageStatus(chatId, newMessage.id, "read");
      queryClient.invalidateQueries({ queryKey: ["chatBody"] });
      queryClient.invalidateQueries({ queryKey: ["chatList"] });
    }, 3000);

    return newMessage;
  },

  // PUT - Update message status
  async updateMessageStatus(
    chatId: number,
    messageId: number,
    status: "sent" | "delivered" | "read"
  ): Promise<void> {
    const stored = localStorage.getItem("chatsDB");
    const chats: chatsDBProps[] = stored ? JSON.parse(stored) : [...chatsDB];

    const chatIndex = chats.findIndex((c) => c.id === Number(chatId));
    if (chatIndex !== -1) {
      const messageIndex = chats[chatIndex].messages.findIndex(
        (m) => m.id === Number(messageId)
      );
      if (messageIndex !== -1) {
        chats[chatIndex].messages[messageIndex].status = status;
        localStorage.setItem("chatsDB", JSON.stringify(chats));
      }
    }
  },

  // PUT - Mark chat as read
  async markChatAsRead(chatId: number) {
    await delay(100);
    const stored = localStorage.getItem("chatsDB");
    const chats: chatsDBProps[] = stored ? JSON.parse(stored) : [...chatsDB];

    const chatIndex = chats.findIndex((c) => c.id === Number(chatId));
    if (chatIndex !== -1) {
      chats[chatIndex].unreadCount = 0;
      localStorage.setItem("chatsDB", JSON.stringify(chats));
    }
  },

  // Search chats
  async searchChats(query: string) {
    await delay(150);
    const stored = localStorage.getItem("chatsDB");
    const chats: chatsDBProps[] = stored ? JSON.parse(stored) : chatsDB;

    if (!query) return chats;

    return chats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(query.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(query.toLowerCase())
    );
  },

  // POST - Create new chat
  async createChat(contactData: chatsDBProps) {
    await delay(300);
    const stored = localStorage.getItem("chatsDB");
    const chats: chatsDBProps[] = stored ? JSON.parse(stored) : [...chatsDB];

    const newChat = {
      id: getNextChatId(),
      name: contactData.name,
      avatar:
        contactData.avatar ||
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastMessage: "",
      lastMessageTime: new Date(),
      unreadCount: 0,
      isOnline: false,
      messages: [],
    };

    chats.push(newChat);
    localStorage.setItem("chatsDB", JSON.stringify(chats));
    return newChat;
  },
};
