// Definición de tipos
type ChatMessage = {
  text: string;
  timestamp: string;
};

type WhatsAppChat = {
  id: number;
  contactName: string;
  chatHistory: ChatMessage[];
  userAvatar: string;
  isSelected?: boolean;
};

export const whatsappChats: WhatsAppChat[] = [
  {
    id: 1,
    contactName: "Pablo Demarchi",
    chatHistory: [
      { text: "Hola, ¿cómo estás?", timestamp: "10:45 p.m." },
      { text: "¡Hola! Bien, ¿y vos?", timestamp: "10:46 p.m." },
      {
        text: "Todo bien por acá. ¿Vamos al cine mañana?",
        timestamp: "10:48 p.m.",
      },
    ],
    userAvatar: "/Avatars/image_0000.png",
    isSelected: true,
  },
  {
    id: 2,
    contactName: "Fabian López",
    chatHistory: [
      {
        text: "Buenos días, ¿ya revisaste el informe?",
        timestamp: "9:25 a.m.",
      },
      { text: "Sí, ya lo envié por correo.", timestamp: "9:28 a.m." },
    ],
    userAvatar: "/Avatars/image_0002.png",
  },
  {
    id: 3,
    contactName: "Andrea Gómez",
    chatHistory: [
      { text: "¿Quedamos en el café a las 5?", timestamp: "3:10 p.m." },
      { text: "Sí, nos vemos allí.", timestamp: "3:12 p.m." },
    ],
    userAvatar: "/Avatars/image_0003.png",
  },
  {
    id: 4,
    contactName: "Alberto Torres",
    chatHistory: [
      {
        text: "¿Viste el último episodio de la serie?",
        timestamp: "7:15 p.m.",
      },
      { text: "¡Sí! Increíble el final.", timestamp: "7:20 p.m." },
    ],
    userAvatar: "/Avatars/image_0004.png",
  },
  {
    id: 5,
    contactName: "Franco Fernández",
    chatHistory: [
      { text: "Necesito ayuda con el proyecto.", timestamp: "11:00 a.m." },
      { text: "Dime en qué puedo ayudarte.", timestamp: "11:02 a.m." },
    ],
    userAvatar: "/Avatars/image_0005.png",
  },
  {
    id: 6,
    contactName: "Jorge Martínez",
    chatHistory: [
      { text: "¿Trajiste los documentos?", timestamp: "5:35 p.m." },
      { text: "Sí, los tengo aquí.", timestamp: "5:38 p.m." },
    ],
    userAvatar: "/Avatars/image_0006.png",
  },
  {
    id: 7,
    contactName: "Sofía Ramírez",
    chatHistory: [
      { text: "Feliz cumpleaños 🎉", timestamp: "7:55 p.m." },
      { text: "¡Muchas gracias! 🥳", timestamp: "7:58 p.m." },
    ],
    userAvatar: "/Avatars/image_0007.png",
  },
  {
    id: 8,
    contactName: "Marco Perdomo",
    chatHistory: [
      {
        text: "Buenos días, ¿ya revisaste el informe?",
        timestamp: "9:25 a.m.",
      },
      {
        text: "Hola Marco, ¿Puedo buscar los pauntes en tu casa?",
        timestamp: "9:28 a.m.",
      },
    ],
    userAvatar: "/Avatars/image_0008.png",
  },
  {
    id: 9,
    contactName: "Paula Lezcano",
    chatHistory: [
      {
        text: "Buenos días, ¿ya revisaste el informe?",
        timestamp: "9:25 a.m.",
      },
      {
        text: "Hola Paula, ¿Sigue disponible todavía para ir buscarlo?.",
        timestamp: "9:28 a.m.",
      },
    ],
    userAvatar: "/Avatars/image_0009.png",
  },
  {
    id: 10,
    contactName: "Pedro Falcón",
    chatHistory: [
      {
        text: "Buenos días, ¿ya revisaste el informe?",
        timestamp: "9:25 a.m.",
      },
      {
        text: "Todavía no puede enviartelo, pero mañana te lo paso sin falta.",
        timestamp: "9:28 a.m.",
      },
    ],
    userAvatar: "/Avatars/image_0010.png",
  },
];
