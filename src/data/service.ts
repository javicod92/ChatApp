import { chatsDB, getNextChatId, getNextMessageId } from "../data/chats.js";

// Simulate API delay
const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API service for chat operations
export const chatService = {
  // GET all chats
  async getAllChats() {
    await delay(200);
    const stored = localStorage.getItem("chatsDB");
    const chats = stored ? JSON.parse(stored) : [...chatsDB];

    // Sort by last message time (most recent first)
    return chats.sort(
      (a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime)
    );
  },

  // GET chat by ID
  async getChatById(id) {
    await delay(100);
    const stored = localStorage.getItem("chatsDB");
    const chats = stored ? JSON.parse(stored) : chatsDB;
    const chat = chats.find((c) => c.id === parseInt(id));
    if (!chat) {
      throw new Error("Chat not found");
    }
    return chat;
  },

  // GET messages for a chat
  async getMessages(chatId) {
    await delay(150);
    const chat = await this.getChatById(chatId);
    return chat.messages || [];
  },

  // POST - Send new message
  async sendMessage(chatId, messageText) {
    await delay(200);
    const stored = localStorage.getItem("chatsDB");
    const chats = stored ? JSON.parse(stored) : [...chatsDB];

    const chatIndex = chats.findIndex((c) => c.id === parseInt(chatId));
    if (chatIndex === -1) {
      throw new Error("Chat not found");
    }

    const newMessage = {
      id: getNextMessageId(parseInt(chatId)),
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
    setTimeout(
      () => this.updateMessageStatus(chatId, newMessage.id, "delivered"),
      1000
    );
    setTimeout(
      () => this.updateMessageStatus(chatId, newMessage.id, "read"),
      3000
    );

    return newMessage;
  },

  // PUT - Update message status
  async updateMessageStatus(chatId, messageId, status) {
    const stored = localStorage.getItem("chatsDB");
    const chats = stored ? JSON.parse(stored) : [...chatsDB];

    const chatIndex = chats.findIndex((c) => c.id === parseInt(chatId));
    if (chatIndex !== -1) {
      const messageIndex = chats[chatIndex].messages.findIndex(
        (m) => m.id === parseInt(messageId)
      );
      if (messageIndex !== -1) {
        chats[chatIndex].messages[messageIndex].status = status;
        localStorage.setItem("chatsDB", JSON.stringify(chats));
      }
    }
  },

  // PUT - Mark chat as read
  async markChatAsRead(chatId) {
    await delay(100);
    const stored = localStorage.getItem("chatsDB");
    const chats = stored ? JSON.parse(stored) : [...chatsDB];

    const chatIndex = chats.findIndex((c) => c.id === parseInt(chatId));
    if (chatIndex !== -1) {
      chats[chatIndex].unreadCount = 0;
      localStorage.setItem("chatsDB", JSON.stringify(chats));
    }
  },

  // Search chats
  async searchChats(query) {
    await delay(150);
    const stored = localStorage.getItem("chatsDB");
    const chats = stored ? JSON.parse(stored) : chatsDB;

    if (!query) return chats;

    return chats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(query.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(query.toLowerCase())
    );
  },

  // POST - Create new chat
  async createChat(contactData) {
    await delay(300);
    const stored = localStorage.getItem("chatsDB");
    const chats = stored ? JSON.parse(stored) : [...chatsDB];

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
