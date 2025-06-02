export type ChatMessage = {
  text: string;
  timestamp: string;
  sentByMe: boolean;
};

export type WhatsAppChat = {
  id: number;
  contactName: string;
  chatHistory: ChatMessage[];
  userAvatar: string;
  isSelected?: boolean;
  messageStatus?: "sent" | "delivered" | "read";
};

export const whatsappChats: WhatsAppChat[] = [
  {
    id: 1,
    contactName: "Pablo Demarchi",
    chatHistory: [
      {
        text: "Che al final encontraste el lugar para estacionar?",
        timestamp: "6:46 p.m.",
        sentByMe: false,
      },
      {
        text: "Sí, me costó un poco pero dejé el auto a la vuelta jeje, por suerte nadie me vió estacionando 🤣🤣🤣🤣🤣. Tuve que hacer malabares para meter el auto en ese lugarcito que dejaron jajaja",
        timestamp: "6:47 p.m.",
        sentByMe: true,
      },
      {
        text: "Bueno joya, ya entro entonces!",
        timestamp: "6:48 p.m.",
        sentByMe: false,
      },
      {
        text: "Tremenda la peli eh, la verdad me re sorprendió",
        timestamp: "9:30 p.m.",
        sentByMe: true,
      },
      {
        text: "Mal! La escena donde pelean en el agua me dejó loco 😱, estaban muy buenos los efectos la verdad y encima el sonido era brutal, aunque por ahí se saturaba un poco nomás 😂😂😂😂😂, pero todo lo demas estubo súper",
        timestamp: "9:31 p.m.",
        sentByMe: false,
      },
      {
        text: "Siii, no me la esperaba ni ahí",
        timestamp: "9:32 p.m.",
        sentByMe: true,
      },
      {
        text: "Después te paso un video con teorías que vi en YouTube jajaj",
        timestamp: "9:33 p.m.",
        sentByMe: false,
      },
      {
        text: "Dale, estaría genial eso. Estoy re manija jaja",
        timestamp: "9:34 p.m.",
        sentByMe: true,
      },
      {
        text: "Ahora justamente estaba viendo a un YouTuber que hablaba de la peli",
        timestamp: "9:34 p.m.",
        sentByMe: true,
      },
      {
        text: "No le entendí mucho así que me voy a comer algo y después sigo",
        timestamp: "9:34 p.m.",
        sentByMe: true,
      },
      {
        text: "Che y mañana qué onda? Vas a lo de Nico?",
        timestamp: "10:02 p.m.",
        sentByMe: false,
      },
      {
        text: "No sé todavía, me siento medio bajón hoy la verdad",
        timestamp: "10:04 p.m.",
        sentByMe: true,
      },
      {
        text: "Uh amigo, todo bien?",
        timestamp: "10:05 p.m.",
        sentByMe: false,
      },
      {
        text: "Sí, tranqui, solo depre de domingo jaja. Viste cómo es.",
        timestamp: "10:06 p.m.",
        sentByMe: true,
      },
      {
        text: "Te entiendo. Si querés venite a casa y comemos algo, sin plan ni nada.",
        timestamp: "10:07 p.m.",
        sentByMe: false,
      },
      {
        text: "Re va eso, gracias loco ❤️",
        timestamp: "10:08 p.m.",
        sentByMe: true,
      },
      {
        text: "Para eso estamos pa",
        timestamp: "10:08 p.m.",
        sentByMe: false,
      },
      {
        text: "Mañana te caigo tipo 8 entonces",
        timestamp: "10:10 p.m.",
        sentByMe: true,
      },
      {
        text: "Dale, te espero con empanadas 😎",
        timestamp: "10:11 p.m.",
        sentByMe: false,
      },
      {
        text: "Jajaja sos un grande",
        timestamp: "10:12 p.m.",
        sentByMe: true,
      },
      {
        text: "Che viste lo de la tormenta?",
        timestamp: "8:22 a.m.",
        sentByMe: false,
      },
      {
        text: "Sí, me despertó el viento 😵",
        timestamp: "8:23 a.m.",
        sentByMe: true,
      },
      {
        text: "Encima se cortó la luz un toque acá",
        timestamp: "8:24 a.m.",
        sentByMe: true,
      },
      {
        text: "Acá también. No puedo prepararme ni el café, encima me levante temprano para terminar de hacer un trabajo. y bueno... lo dejaré para después de comer 🤣🤣🤣",
        timestamp: "8:25 a.m.",
        sentByMe: false,
      },
      {
        text: "Drama real jaja",
        timestamp: "8:25 a.m.",
        sentByMe: true,
      },
      {
        text: "Che me olvidé de contarte, me llamaron de laburo nuevo",
        timestamp: "3:00 p.m.",
        sentByMe: false,
      },
      {
        text: "Ehhh qué bien amigooo! Te felicitoooo 🥳, tenemos que salir a festejar en algún lugar amigo, encima con la dedicación que tenés vas a llegar a lejos amigo!!! Ahora le voy a decir a mamá que se va a poner súper contenta",
        timestamp: "3:01 p.m.",
        sentByMe: true,
      },
      {
        text: "Gracias loco, todavía no lo puedo creer jajaja",
        timestamp: "3:02 p.m.",
        sentByMe: false,
      },
      {
        text: "Te re lo merecés, posta",
        timestamp: "3:03 p.m.",
        sentByMe: true,
      },
      {
        text: "Vamos a tener que festejar eso eh",
        timestamp: "3:04 p.m.",
        sentByMe: true,
      },
      {
        text: "Ni hablar. Este finde armamos algo.",
        timestamp: "3:05 p.m.",
        sentByMe: false,
      },
      {
        text: "Avísame y llevo birras 😏",
        timestamp: "3:06 p.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0000.png",
    isSelected: true,
    messageStatus: "read",
  },
  {
    id: 2,
    contactName: "Fabian López",
    chatHistory: [
      {
        text: "Buen día che, viste el informe ya?",
        timestamp: "9:25 a.m.",
        sentByMe: false,
      },
      {
        text: "Sí, ya te lo mandé por mail.",
        timestamp: "9:28 a.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0002.png",
    messageStatus: "read",
  },
  {
    id: 3,
    contactName: "Andrea Gómez",
    chatHistory: [
      {
        text: "Nos vemos en el café tipo 5?",
        timestamp: "3:10 p.m.",
        sentByMe: false,
      },
      { text: "Dale, ahí nos vemos.", timestamp: "3:12 p.m.", sentByMe: true },
    ],
    userAvatar: "/Avatars/image_0003.png",
  },
  {
    id: 4,
    contactName: "Alberto Torres",
    chatHistory: [
      {
        text: "Te viste el último capi de la serie?",
        timestamp: "7:15 p.m.",
        sentByMe: false,
      },
      {
        text: "Sí! Altísimo final.",
        timestamp: "7:20 p.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0004.png",
  },
  {
    id: 5,
    contactName: "Franco Fernández",
    chatHistory: [
      {
        text: "Che, necesito una mano con el proyecto.",
        timestamp: "11:00 a.m.",
        sentByMe: false,
      },
      {
        text: "Decime nomás, en qué te doy una mano?",
        timestamp: "11:02 a.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0005.png",
  },
  {
    id: 6,
    contactName: "Jorge Martínez",
    chatHistory: [
      {
        text: "Trajiste los papeles?",
        timestamp: "5:35 p.m.",
        sentByMe: false,
      },
      { text: "Sí, los tengo encima.", timestamp: "5:38 p.m.", sentByMe: true },
    ],
    userAvatar: "/Avatars/image_0006.png",
    messageStatus: "read",
  },
  {
    id: 7,
    contactName: "Sofía Ramírez",
    chatHistory: [
      { text: "Feliz cumple 🎉", timestamp: "7:55 p.m.", sentByMe: false },
      { text: "Gracias genia! 🥳", timestamp: "7:58 p.m.", sentByMe: true },
    ],
    userAvatar: "/Avatars/image_0007.png",
  },
  {
    id: 8,
    contactName: "Marco Perdomo",
    chatHistory: [
      {
        text: "Buen día, revisaste el informe?",
        timestamp: "9:25 a.m.",
        sentByMe: false,
      },
      {
        text: "Ey Marco, puedo pasar por tu casa a buscar los apuntes?",
        timestamp: "9:28 a.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0008.png",
    messageStatus: "read",
  },
  {
    id: 9,
    contactName: "Paula Lezcano",
    chatHistory: [
      {
        text: "Buen día, miraste el informe?",
        timestamp: "9:25 a.m.",
        sentByMe: false,
      },
      {
        text: "Hola Pau, sigue estando para pasar a buscarlo?",
        timestamp: "9:28 a.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0009.png",
  },
  {
    id: 10,
    contactName: "Pedro Falcón",
    chatHistory: [
      {
        text: "Buen día, revisaste el informe?",
        timestamp: "9:25 a.m.",
        sentByMe: false,
      },
      {
        text: "Todavía no pude, pero mañana sin falta te lo paso.",
        timestamp: "9:28 a.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0010.png",
    messageStatus: "read",
  },
  {
    id: 11,
    contactName: "Lucía Méndez",
    chatHistory: [
      {
        text: "Te llegó el paquete al final?",
        timestamp: "8:00 a.m.",
        sentByMe: false,
      },
      {
        text: "Sí, todo perfecto. Gracias che.",
        timestamp: "8:05 a.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0011.png",
  },
  {
    id: 12,
    contactName: "Diego Rivera",
    chatHistory: [
      {
        text: "Tenemos la reunión a las 3 eh.",
        timestamp: "11:15 a.m.",
        sentByMe: false,
      },
      {
        text: "Dale! Voy a estar al toque.",
        timestamp: "11:17 a.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0012.png",
  },
  {
    id: 13,
    contactName: "Valeria Suárez",
    chatHistory: [
      {
        text: "Me pasás el archivo?",
        timestamp: "10:20 a.m.",
        sentByMe: false,
      },
      {
        text: "Obvio! Te lo mando ya.",
        timestamp: "10:21 a.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0013.png",
  },
  {
    id: 14,
    contactName: "Camila Quintana",
    chatHistory: [
      { text: "Jugamos esta noche?", timestamp: "6:30 p.m.", sentByMe: false },
      {
        text: "Dale! Después de cenar me conecto.",
        timestamp: "6:33 p.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0014.png",
  },
  {
    id: 15,
    contactName: "Matías Ortega",
    chatHistory: [
      {
        text: "Viste el correo de RRHH?",
        timestamp: "4:45 p.m.",
        sentByMe: false,
      },
      {
        text: "Sí, ya les respondí. Vos qué onda?",
        timestamp: "4:47 p.m.",
        sentByMe: true,
      },
    ],
    userAvatar: "/Avatars/image_0015.png",
  },
];
