// Mock chat database
let chatsDB = [
  {
    id: 1,
    name: "María García",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    lastMessage: "¡Hola! ¿Cómo estás?",
    lastMessageTime: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    unreadCount: 2,
    isOnline: true,
    messages: [
      {
        id: 1,
        text: "¡Hola! ¿Cómo estás?",
        timestamp: new Date(Date.now() - 10 * 60 * 1000),
        sender: "contact",
        status: "read",
      },
      {
        id: 2,
        text: "Todo bien, ¿y tú?",
        timestamp: new Date(Date.now() - 8 * 60 * 1000),
        sender: "me",
        status: "read",
      },
      {
        id: 3,
        text: "Perfecto! ¿Nos vemos mañana?",
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        sender: "contact",
        status: "delivered",
      },
    ],
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    lastMessage: "La reunión es a las 3pm",
    lastMessageTime: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    unreadCount: 0,
    isOnline: false,
    lastSeen: new Date(Date.now() - 15 * 60 * 1000),
    messages: [
      {
        id: 1,
        text: "¿A qué hora es la reunión?",
        timestamp: new Date(Date.now() - 45 * 60 * 1000),
        sender: "me",
        status: "read",
      },
      {
        id: 2,
        text: "La reunión es a las 3pm",
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        sender: "contact",
        status: "read",
      },
    ],
  },
  {
    id: 3,
    name: "Ana López",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
    lastMessage: "¡Gracias por tu ayuda!",
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    unreadCount: 1,
    isOnline: true,
    messages: [
      {
        id: 1,
        text: "¿Me puedes ayudar con el proyecto?",
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        sender: "contact",
        status: "read",
      },
      {
        id: 2,
        text: "¡Por supuesto! ¿Qué necesitas?",
        timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000),
        sender: "me",
        status: "read",
      },
      {
        id: 3,
        text: "¡Gracias por tu ayuda!",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        sender: "contact",
        status: "delivered",
      },
    ],
  },
  {
    id: 4,
    name: "Grupo Familia",
    avatar:
      "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=100",
    lastMessage: "Mamá: ¿Vienen a cenar el domingo?",
    lastMessageTime: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    unreadCount: 5,
    isGroup: true,
    isOnline: false,
    messages: [
      {
        id: 1,
        text: "¡Hola familia!",
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        sender: "contact",
        senderName: "Papá",
        status: "read",
      },
      {
        id: 2,
        text: "¡Hola papá!",
        timestamp: new Date(Date.now() - 4.5 * 60 * 60 * 1000),
        sender: "me",
        status: "read",
      },
      {
        id: 3,
        text: "¿Vienen a cenar el domingo?",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
        sender: "contact",
        senderName: "Mamá",
        status: "delivered",
      },
    ],
  },
  {
    id: 5,
    name: "David Martín",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
    lastMessage: "¡Perfecto! Nos vemos entonces",
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    unreadCount: 0,
    isOnline: false,
    lastSeen: new Date(Date.now() - 12 * 60 * 60 * 1000),
    messages: [
      {
        id: 1,
        text: "¿Quieres ir al cine mañana?",
        timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000),
        sender: "me",
        status: "read",
      },
      {
        id: 2,
        text: "¡Perfecto! Nos vemos entonces",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        sender: "contact",
        status: "read",
      },
    ],
  },
];

// Get next available ID for chats
export const getNextChatId = () => {
  return Math.max(...chatsDB.map((chat) => chat.id)) + 1;
};

// Get next available ID for messages
export const getNextMessageId = (chatId) => {
  const chat = chatsDB.find((c) => c.id === chatId);
  if (!chat || !chat.messages.length) return 1;
  return Math.max(...chat.messages.map((msg) => msg.id)) + 1;
};

export { chatsDB };
