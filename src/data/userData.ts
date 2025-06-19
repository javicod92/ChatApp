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
        text: "Iagual, creo que es mejor descansar y esperar a que pase todo",
        timestamp: "8:25 a.m.",
        sentByMe: false,
      },
      {
        text: "Por las dudas voy a desenchufar mis cosas jajaja",
        timestamp: "8:25 a.m.",
        sentByMe: false,
      },
      {
        text: "Drama real jaja",
        timestamp: "8:25 a.m.",
        sentByMe: true,
      },
      {
        text: "Creo que yo debería hacer lo mismo",
        timestamp: "8:26 a.m.",
        sentByMe: true,
      },
      {
        text: "🤣🤣🤣🤣🤣",
        timestamp: "8:26 a.m.",
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
    userAvatar: "/Avatars/image_0000.webp",
    isSelected: true,
    messageStatus: "read",
  },
  {
    id: 2,
    contactName: "Martín Pérez",
    chatHistory: [
      {
        text: "Che, al final vas a la juntada el sábado?",
        timestamp: "10:01 a.m.",
        sentByMe: false,
      },
      {
        text: "Mirá que no podes faltar amigo vos he jajaja, hace mucho no nos vemos así que nos viene de 10",
        timestamp: "10:01 a.m.",
        sentByMe: false,
      },
      {
        text: "Tenemos que ponernos al día con nuestras cosas 🤣🤣🤣🤣",
        timestamp: "10:01 a.m.",
        sentByMe: false,
      },
      {
        text: "Sí, obvio. A qué hora era?",
        timestamp: "10:02 a.m.",
        sentByMe: true,
      },
      {
        text: "Ya le avisé a la Eli que si o si voy jajaja asi que nos vemos allá seguro amigo",
        timestamp: "10:02 a.m.",
        sentByMe: true,
      },
      {
        text: "Avisame nomas la hora y caigo 🚀",
        timestamp: "10:02 a.m.",
        sentByMe: true,
      },
      {
        text: "Tipo 8 voy maso, pero podés caer antes si querés así habalmos.",
        timestamp: "10:03 a.m.",
        sentByMe: false,
      },
      {
        text: "Dale, capaz llego 7 y media así ayudo con algo.",
        timestamp: "10:04 a.m.",
        sentByMe: true,
      },
      {
        text: "Buenísimo, traé la Play si podés de paso 🤣🤣🤣🤣.",
        timestamp: "10:05 a.m.",
        sentByMe: false,
      },
      {
        text: "La mia dejó de andar hace unos 2 mesesmaso 😑😑😑😑",
        timestamp: "10:05 a.m.",
        sentByMe: false,
      },
      {
        text: "Obvio, llevo los joysticks también.",
        timestamp: "10:06 a.m.",
        sentByMe: true,
      },
      {
        text: "Tengo un juego de cartas que está buenisimo, ese tambien voy a tratar de llevar",
        timestamp: "10:06 a.m.",
        sentByMe: true,
      },
      {
        text: "Voy a pedirle a la Eli que lleve alargue para enchufar todo nomás 🤣🤣🤣🤣",
        timestamp: "10:06 a.m.",
        sentByMe: true,
      },
      { text: "Che, quién más va?", timestamp: "10:07 a.m.", sentByMe: true },
      {
        text: "Dalee perfecto, me parece genial jajajaja. Viene el Nico, la Vale, el Fede y capaz la Sofi.",
        timestamp: "10:08 a.m.",
        sentByMe: false,
      },
      {
        text: "Despues otros amigos de Eli que no se quienes son jajajaja",
        timestamp: "10:08 a.m.",
        sentByMe: false,
      },
      {
        text: "Buee la Sofiii. Hace mil que no la veo jajaja.",
        timestamp: "10:09 a.m.",
        sentByMe: true,
      },
      {
        text: "Sí, encima dice que anda con ganas de salir jajajaja 🤣🤣.",
        timestamp: "10:10 a.m.",
        sentByMe: false,
      },
      {
        text: "Che, y no sabes si hay que llevar algo mas para tomar?",
        timestamp: "10:11 a.m.",
        sentByMe: true,
      },
      {
        text: "Lo que vos quieras tomas nomás, acá creeria que va a haber algo, pero no sé que.",
        timestamp: "10:12 a.m.",
        sentByMe: false,
      },
      {
        text: "Dale, paso por el chino antes de ir entonces y compro.",
        timestamp: "10:13 a.m.",
        sentByMe: true,
      },
      {
        text: "Hace falta hielo tambien?",
        timestamp: "10:14 a.m.",
        sentByMe: true,
      },
      {
        text: "Tienen muy buenas ofertas ahora así que llevo",
        timestamp: "10:14 a.m.",
        sentByMe: true,
      },
      {
        text: "Sí, si querés traete un par de bolsas por las dudas.",
        timestamp: "10:15 a.m.",
        sentByMe: false,
      },
      {
        text: "Listo, anoto todo. Algo más?",
        timestamp: "10:16 a.m.",
        sentByMe: true,
      },
      {
        text: "No, yo creo que con eso estamos. Nos vemos el sábado amigazo!",
        timestamp: "10:17 a.m.",
        sentByMe: false,
      },
      {
        text: "Dale mi hermano, cualquier cosa te estoy chiflando",
        timestamp: "10:18 a.m.",
        sentByMe: true,
      },
      {
        text: "Espero no me pase lo de la play 🤣🤣🤣🤣",
        timestamp: "10:18 a.m.",
        sentByMe: true,
      },
      {
        text: "Mientras tanto voy preparando el juego de cartas, está buenísimo, tenes que formar dos grupos y vos tenés que tratar de hacer que tu equipo adivine la mayor cantidad de cartas en el menor tiempo posible. En la carta, abajo aparecen palabras que no podes decir. Está muy bueno!!",
        timestamp: "10:18 a.m.",
        sentByMe: true,
      },
      {
        text: "Que copado amigo, suena re interesante jajaja. Che tenés la direccion del lugar? sino te paso.",
        timestamp: "10:19 a.m.",
        sentByMe: false,
      },
      {
        text: "Sí, la tengo pero pasala igual así la guardo.",
        timestamp: "10:20 a.m.",
        sentByMe: true,
      },
      {
        text: "Es en la casa de siempre, la de la esquina con el portón verde.",
        timestamp: "10:21 a.m.",
        sentByMe: false,
      },
      {
        text: "Perfecto, ya sé cuál es 🙂.",
        timestamp: "10:22 a.m.",
        sentByMe: true,
      },
      {
        text: "Vas a venir con alguien?",
        timestamp: "10:23 a.m.",
        sentByMe: false,
      },
      {
        text: "Capaz vaya con mi primo Ale,",
        timestamp: "10:24 a.m.",
        sentByMe: true,
      },
      {
        text: "Sí, de una, que venga si jajajaja.",
        timestamp: "10:25 a.m.",
        sentByMe: false,
      },
    ],
    userAvatar: "/Avatars/image_0002.webp",
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
      {
        text: "¿Querés que lleve algo?",
        timestamp: "3:13 p.m.",
        sentByMe: true,
      },
      {
        text: "No hace falta, tranqui.",
        timestamp: "3:14 p.m.",
        sentByMe: false,
      },
      {
        text: "Bueno, igual llevo unas medialunas por las dudas jaja",
        timestamp: "3:15 p.m.",
        sentByMe: true,
      },
      { text: "Jajaja, sos un crack", timestamp: "3:16 p.m.", sentByMe: false },
      {
        text: "¿Te acordás dónde queda el café, no?",
        timestamp: "3:17 p.m.",
        sentByMe: false,
      },
      {
        text: "Sí, el de siempre, ¿no?",
        timestamp: "3:18 p.m.",
        sentByMe: true,
      },
      {
        text: "Ese mismo. Igual te paso la ubicación por las dudas.",
        timestamp: "3:19 p.m.",
        sentByMe: false,
      },
      {
        text: "Dale, mandala así la guardo.",
        timestamp: "3:20 p.m.",
        sentByMe: true,
      },
      {
        text: "Listo, te la mandé por WhatsApp.",
        timestamp: "3:21 p.m.",
        sentByMe: false,
      },
      {
        text: "Perfecto, ya la tengo.",
        timestamp: "3:22 p.m.",
        sentByMe: true,
      },
      {
        text: "¿Vas a ir en auto o en bondi?",
        timestamp: "3:23 p.m.",
        sentByMe: false,
      },
      {
        text: "Voy en auto, así después te llevo si querés.",
        timestamp: "3:24 p.m.",
        sentByMe: true,
      },
      { text: "Buenísimo, gracias!", timestamp: "3:25 p.m.", sentByMe: false },
      {
        text: "¿Querés que pase a buscarte?",
        timestamp: "3:26 p.m.",
        sentByMe: true,
      },
      {
        text: "No, tranqui, voy directo. Nos vemos allá!",
        timestamp: "3:27 p.m.",
        sentByMe: false,
      },
    ],
    userAvatar: "/Avatars/image_0003.webp",
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
      { text: "Sí! Altísimo final.", timestamp: "7:20 p.m.", sentByMe: true },
      {
        text: "No me esperaba ese giro, posta.",
        timestamp: "7:21 p.m.",
        sentByMe: true,
      },
      {
        text: "Yo tampoco, me dejó re manija.",
        timestamp: "7:22 p.m.",
        sentByMe: false,
      },
      {
        text: "¿Cuándo sale el próximo?",
        timestamp: "7:23 p.m.",
        sentByMe: false,
      },
      {
        text: "Creo que el viernes que viene.",
        timestamp: "7:24 p.m.",
        sentByMe: true,
      },
      {
        text: "Uff, falta una banda.",
        timestamp: "7:25 p.m.",
        sentByMe: false,
      },
      {
        text: "Encima vi teorías re locas en Twitter.",
        timestamp: "7:26 p.m.",
        sentByMe: false,
      },
      {
        text: "Pasame alguna, así me cebás más.",
        timestamp: "7:27 p.m.",
        sentByMe: true,
      },
      {
        text: "Después te paso el hilo, está buenísimo.",
        timestamp: "7:28 p.m.",
        sentByMe: false,
      },
      {
        text: "Dale, lo leo después de cenar.",
        timestamp: "7:29 p.m.",
        sentByMe: true,
      },
      { text: "¿Ya comiste?", timestamp: "7:30 p.m.", sentByMe: false },
      {
        text: "Todavía no, estoy viendo qué hago.",
        timestamp: "7:31 p.m.",
        sentByMe: true,
      },
      {
        text: "Pedite una pizza, es la que va.",
        timestamp: "7:32 p.m.",
        sentByMe: false,
      },
      {
        text: "Me tentaste, ahora llamo a la pizzería.",
        timestamp: "7:33 p.m.",
        sentByMe: true,
      },
      {
        text: "Jajaja, después contame si estaba buena.",
        timestamp: "7:34 p.m.",
        sentByMe: false,
      },
      { text: "Obvio, te mando foto.", timestamp: "7:35 p.m.", sentByMe: true },
    ],
    userAvatar: "/Avatars/image_0004.webp",
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
      {
        text: "No entiendo bien cómo hacer el login.",
        timestamp: "11:03 a.m.",
        sentByMe: false,
      },
      {
        text: "¿Tenés el repo a mano?",
        timestamp: "11:04 a.m.",
        sentByMe: true,
      },
      {
        text: "Sí, te lo paso por mail.",
        timestamp: "11:05 a.m.",
        sentByMe: false,
      },
      {
        text: "Dale, avisame cuando lo mandes.",
        timestamp: "11:06 a.m.",
        sentByMe: true,
      },
      {
        text: "Listo, ya te lo mandé.",
        timestamp: "11:07 a.m.",
        sentByMe: false,
      },
      {
        text: "Perfecto, ahora lo miro.",
        timestamp: "11:08 a.m.",
        sentByMe: true,
      },
      {
        text: "¿Te paso mi usuario y clave de prueba?",
        timestamp: "11:09 a.m.",
        sentByMe: false,
      },
      { text: "Sí, así pruebo bien.", timestamp: "11:10 a.m.", sentByMe: true },
      {
        text: "Usuario: franco, clave: 1234",
        timestamp: "11:11 a.m.",
        sentByMe: false,
      },
      { text: "Listo, ya entré.", timestamp: "11:12 a.m.", sentByMe: true },
      {
        text: "¿Te tira algún error?",
        timestamp: "11:13 a.m.",
        sentByMe: false,
      },
      {
        text: "No, pero el botón de login no se desactiva.",
        timestamp: "11:14 a.m.",
        sentByMe: true,
      },
      {
        text: "Ah, seguro es por el estado. Fijate si lo actualizás bien.",
        timestamp: "11:15 a.m.",
        sentByMe: false,
      },
      {
        text: "Dale, ahora lo reviso.",
        timestamp: "11:16 a.m.",
        sentByMe: true,
      },
      {
        text: "Cualquier cosa avisame, estoy en la compu.",
        timestamp: "11:17 a.m.",
        sentByMe: false,
      },
    ],
    userAvatar: "/Avatars/image_0005.webp",
  },
  {
    id: 6,
    contactName: "Lucía Benítez",
    chatHistory: [
      {
        text: "Lu, ¿me pasás el apunte de historia?",
        timestamp: "8:30 a.m.",
        sentByMe: true,
      },
      {
        text: "Sí, bancá que lo busco.",
        timestamp: "8:31 a.m.",
        sentByMe: false,
      },
      {
        text: "Gracias! Me re salvas.",
        timestamp: "8:32 a.m.",
        sentByMe: true,
      },
      {
        text: "No hay drama, para eso estamos.",
        timestamp: "8:33 a.m.",
        sentByMe: false,
      },
      {
        text: "¿Te lo mando por mail o por acá?",
        timestamp: "8:34 a.m.",
        sentByMe: false,
      },
      {
        text: "Por acá mejor, así lo bajo al toque.",
        timestamp: "8:35 a.m.",
        sentByMe: true,
      },
      {
        text: "Listo, ahí va el PDF.",
        timestamp: "8:36 a.m.",
        sentByMe: false,
      },
      {
        text: "Llegó perfecto, mil gracias.",
        timestamp: "8:37 a.m.",
        sentByMe: true,
      },
      { text: "¿Ya estudiaste algo?", timestamp: "8:38 a.m.", sentByMe: false },
      {
        text: "Un poco, pero me falta banda todavía.",
        timestamp: "8:39 a.m.",
        sentByMe: true,
      },
      {
        text: "Tranqui, yo tampoco arranqué fuerte.",
        timestamp: "8:40 a.m.",
        sentByMe: false,
      },
      {
        text: "¿Querés que repasemos juntos después?",
        timestamp: "8:41 a.m.",
        sentByMe: false,
      },
      {
        text: "Sí, de una. ¿Hoy a la tarde podés?",
        timestamp: "8:42 a.m.",
        sentByMe: true,
      },
      { text: "Dale, tipo 5 te va?", timestamp: "8:43 a.m.", sentByMe: false },
      {
        text: "Perfecto, te escribo cuando esté libre.",
        timestamp: "8:44 a.m.",
        sentByMe: true,
      },
      {
        text: "Dale, suerte con el estudio!",
        timestamp: "8:45 a.m.",
        sentByMe: false,
      },
      { text: "Gracias, igualmente!", timestamp: "8:46 a.m.", sentByMe: true },
    ],
    userAvatar: "/Avatars/image_0006.webp",
  },
  {
    id: 7,
    contactName: "Sofía Ramírez",
    chatHistory: [
      { text: "Feliz cumple 🎉", timestamp: "7:55 p.m.", sentByMe: false },
      { text: "Gracias genia! 🥳", timestamp: "7:58 p.m.", sentByMe: true },
    ],
    userAvatar: "/Avatars/image_0007.webp",
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
    userAvatar: "/Avatars/image_0008.webp",
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
    userAvatar: "/Avatars/image_0009.webp",
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
    userAvatar: "/Avatars/image_0010.webp",
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
    userAvatar: "/Avatars/image_0011.webp",
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
    userAvatar: "/Avatars/image_0012.webp",
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
    userAvatar: "/Avatars/image_0013.webp",
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
    userAvatar: "/Avatars/image_0014.webp",
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
    userAvatar: "/Avatars/image_0015.webp",
  },
];
