import type { chatsDBProps } from "../types/chat";

export const chatsDB: chatsDBProps[] = [
  {
    id: 1,
    name: "Pablo Demarchi",
    avatar: "/Avatars/image_0000.webp",
    lastMessage: "Avísame y llevo birras 😏",
    lastMessageTime: new Date(Date.now() - 1 * 60 * 1000), // 1min
    unreadCount: 0,
    isOnline: true,
    messages: [
      {
        text: "Che al final encontraste el lugar para estacionar?",
        timestamp: new Date(Date.now() - 36 * 60 * 1000),
        sender: "contact",
        id: 1,
      },
      {
        text: "Sí, me costó un poco pero dejé el auto a la vuelta jeje, por suerte nadie me vió estacionando 🤣🤣🤣🤣🤣. Tuve que hacer malabares para meter el auto en ese lugarcito que dejaron jajaja",
        timestamp: new Date(Date.now() - 35 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 2,
      },
      {
        text: "Bueno joya, ya entro entonces!",
        timestamp: new Date(Date.now() - 34 * 60 * 1000),
        sender: "contact",
        id: 3,
      },
      {
        text: "Tremenda la peli eh, la verdad me re sorprendió",
        timestamp: new Date(Date.now() - 33 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 4,
      },
      {
        text: "Mal! La escena donde pelean en el agua me dejó loco 😱, estaban muy buenos los efectos la verdad y encima el sonido era brutal, aunque por ahí se saturaba un poco nomás 😂😂😂😂😂, pero todo lo demas estubo súper",
        timestamp: new Date(Date.now() - 32 * 60 * 1000),
        sender: "contact",
        id: 5,
      },
      {
        text: "Siii, no me la esperaba ni ahí",
        timestamp: new Date(Date.now() - 31 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 6,
      },
      {
        text: "Después te paso un video con teorías que vi en YouTube jajaj",
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        sender: "contact",
        id: 7,
      },
      {
        text: "Dale, estaría genial eso. Estoy re manija jaja",
        timestamp: new Date(Date.now() - 29 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 8,
      },
      {
        text: "Ahora justamente estaba viendo a un YouTuber que hablaba de la peli",
        timestamp: new Date(Date.now() - 28 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 9,
      },
      {
        text: "No le entendí mucho así que me voy a comer algo y después sigo",
        timestamp: new Date(Date.now() - 27 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 10,
      },
      {
        text: "Che y mañana qué onda? Vas a lo de Nico?",
        timestamp: new Date(Date.now() - 26 * 60 * 1000),
        sender: "contact",
        id: 11,
      },
      {
        text: "No sé todavía, me siento medio bajón hoy la verdad",
        timestamp: new Date(Date.now() - 25 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 12,
      },
      {
        text: "Uh amigo, todo bien?",
        timestamp: new Date(Date.now() - 24 * 60 * 1000),
        sender: "contact",
        id: 13,
      },
      {
        text: "Sí, tranqui, solo depre de domingo jaja. Viste cómo es.",
        timestamp: new Date(Date.now() - 23 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 14,
      },
      {
        text: "Te entiendo. Si querés venite a casa y comemos algo, sin plan ni nada.",
        timestamp: new Date(Date.now() - 22 * 60 * 1000),
        sender: "contact",
        id: 15,
      },
      {
        text: "Re va eso, gracias loco ❤️",
        timestamp: new Date(Date.now() - 21 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 16,
      },
      {
        text: "Para eso estamos pa",
        timestamp: new Date(Date.now() - 20 * 60 * 1000),
        sender: "contact",
        id: 17,
      },
      {
        text: "Mañana te caigo tipo 8 entonces",
        timestamp: new Date(Date.now() - 19 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 18,
      },
      {
        text: "Dale, te espero con empanadas 😎",
        timestamp: new Date(Date.now() - 18 * 60 * 1000),
        sender: "contact",
        id: 19,
      },
      {
        text: "Jajaja sos un grande",
        timestamp: new Date(Date.now() - 17 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 20,
      },
      {
        text: "Che viste lo de la tormenta?",
        timestamp: new Date(Date.now() - 16 * 60 * 1000),
        sender: "contact",
        id: 21,
      },
      {
        text: "Sí, me despertó el viento 😵",
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 22,
      },
      {
        text: "Encima se cortó la luz un toque acá",
        timestamp: new Date(Date.now() - 14 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 23,
      },
      {
        text: "Acá también. No puedo prepararme ni el café, encima me levante temprano para terminar de hacer un trabajo. y bueno... lo dejaré para después de comer 🤣🤣🤣",
        timestamp: new Date(Date.now() - 13 * 60 * 1000),
        sender: "contact",
        id: 24,
      },
      {
        text: "Iagual, creo que es mejor descansar y esperar a que pase todo",
        timestamp: new Date(Date.now() - 12 * 60 * 1000),
        sender: "contact",
        id: 25,
      },
      {
        text: "Por las dudas voy a desenchufar mis cosas jajaja",
        timestamp: new Date(Date.now() - 11 * 60 * 1000),
        sender: "contact",
        id: 26,
      },
      {
        text: "Drama real jaja",
        timestamp: new Date(Date.now() - 10 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 27,
      },
      {
        text: "Creo que yo debería hacer lo mismo",
        timestamp: new Date(Date.now() - 9 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 28,
      },
      {
        text: "🤣🤣🤣🤣🤣",
        timestamp: new Date(Date.now() - 8 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 29,
      },
      {
        text: "Che me olvidé de contarte, me llamaron de laburo nuevo",
        timestamp: new Date(Date.now() - 7 * 60 * 1000),
        sender: "contact",
        id: 30,
      },
      {
        text: "Ehhh qué bien amigooo! Te felicitoooo 🥳, tenemos que salir a festejar en algún lugar amigo, encima con la dedicación que tenés vas a llegar a lejos amigo!!! Ahora le voy a decir a mamá que se va a poner súper contenta",
        timestamp: new Date(Date.now() - 6 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 31,
      },
      {
        text: "Gracias loco, todavía no lo puedo creer jajaja",
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        sender: "contact",
        id: 32,
      },
      {
        text: "Te re lo merecés, posta",
        timestamp: new Date(Date.now() - 4 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 33,
      },
      {
        text: "Vamos a tener que festejar eso eh",
        timestamp: new Date(Date.now() - 3 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 34,
      },
      {
        text: "Ni hablar. Este finde armamos algo.",
        timestamp: new Date(Date.now() - 2 * 60 * 1000),
        sender: "contact",
        id: 35,
      },
      {
        text: "Avísame y llevo birras 😏",
        timestamp: new Date(Date.now() - 1 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 36,
      },
    ],
  },
  {
    id: 2,
    name: "Martín Pérez",
    avatar: "/Avatars/image_0002.webp",
    lastMessage: "Sí, de una, que venga si jajajaja.",
    lastMessageTime: new Date(Date.now() - 10 * 60 * 1000), // 10 mins
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Che, al final vas a la juntada el sábado?",
        timestamp: new Date(Date.now() - 45 * 60 * 1000),
        sender: "contact",
        id: 1,
      },
      {
        text: "Mirá que no podes faltar amigo vos he jajaja, hace mucho no nos vemos así que nos viene de 10",
        timestamp: new Date(Date.now() - 44 * 60 * 1000),
        sender: "contact",
        id: 2,
      },
      {
        text: "Tenemos que ponernos al día con nuestras cosas 🤣🤣🤣🤣",
        timestamp: new Date(Date.now() - 43 * 60 * 1000),
        sender: "contact",
        id: 3,
      },
      {
        text: "Sí, obvio. A qué hora era?",
        timestamp: new Date(Date.now() - 42 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 4,
      },
      {
        text: "Ya le avisé a la Eli que si o si voy jajaja asi que nos vemos allá seguro amigo",
        timestamp: new Date(Date.now() - 41 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 5,
      },
      {
        text: "Avisame nomas la hora y caigo 🚀",
        timestamp: new Date(Date.now() - 40 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 6,
      },
      {
        text: "Tipo 8 voy maso, pero podés caer antes si querés así habalmos.",
        timestamp: new Date(Date.now() - 39 * 60 * 1000),
        sender: "contact",
        id: 7,
      },
      {
        text: "Dale, capaz llego 7 y media así ayudo con algo.",
        timestamp: new Date(Date.now() - 38 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 8,
      },
      {
        text: "Buenísimo, traé la Play si podés de paso 🤣🤣🤣🤣.",
        timestamp: new Date(Date.now() - 37 * 60 * 1000),
        sender: "contact",
        id: 9,
      },
      {
        text: "La mia dejó de andar hace unos 2 mesesmaso 😑😑😑😑",
        timestamp: new Date(Date.now() - 36 * 60 * 1000),
        sender: "contact",
        id: 10,
      },
      {
        text: "Obvio, llevo los joysticks también.",
        timestamp: new Date(Date.now() - 35 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 11,
      },
      {
        text: "Tengo un juego de cartas que está buenisimo, ese tambien voy a tratar de llevar",
        timestamp: new Date(Date.now() - 34 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 12,
      },
      {
        text: "Voy a pedirle a la Eli que lleve alargue para enchufar todo nomás 🤣🤣🤣🤣",
        timestamp: new Date(Date.now() - 33 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 13,
      },
      {
        text: "Che, quién más va?",
        timestamp: new Date(Date.now() - 32 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 14,
      },
      {
        text: "Dalee perfecto, me parece genial jajajaja. Viene el Nico, la Vale, el Fede y capaz la Sofi.",
        timestamp: new Date(Date.now() - 31 * 60 * 1000),
        sender: "contact",
        id: 15,
      },
      {
        text: "Despues otros amigos de Eli que no se quienes son jajajaja",
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        sender: "contact",
        id: 16,
      },
      {
        text: "Buee la Sofiii. Hace mil que no la veo jajaja.",
        timestamp: new Date(Date.now() - 29 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 17,
      },
      {
        text: "Sí, encima dice que anda con ganas de salir jajajaja 🤣🤣.",
        timestamp: new Date(Date.now() - 28 * 60 * 1000),
        sender: "contact",
        id: 18,
      },
      {
        text: "Che, y no sabes si hay que llevar algo mas para tomar?",
        timestamp: new Date(Date.now() - 27 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 19,
      },
      {
        text: "Lo que vos quieras tomas nomás, acá creeria que va a haber algo, pero no sé que.",
        timestamp: new Date(Date.now() - 26 * 60 * 1000),
        sender: "contact",
        id: 20,
      },
      {
        text: "Dale, paso por el chino antes de ir entonces y compro.",
        timestamp: new Date(Date.now() - 25 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 21,
      },
      {
        text: "Hace falta hielo tambien?",
        timestamp: new Date(Date.now() - 24 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 22,
      },
      {
        text: "Tienen muy buenas ofertas ahora así que llevo",
        timestamp: new Date(Date.now() - 23 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 23,
      },
      {
        text: "Sí, si querés traete un par de bolsas por las dudas.",
        timestamp: new Date(Date.now() - 22 * 60 * 1000),
        sender: "contact",
        id: 24,
      },
      {
        text: "Listo, anoto todo. Algo más?",
        timestamp: new Date(Date.now() - 21 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 25,
      },
      {
        text: "No, yo creo que con eso estamos. Nos vemos el sábado amigazo!",
        timestamp: new Date(Date.now() - 20 * 60 * 1000),
        sender: "contact",
        id: 26,
      },
      {
        text: "Dale mi hermano, cualquier cosa te estoy chiflando",
        timestamp: new Date(Date.now() - 19 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 27,
      },
      {
        text: "Espero no me pase lo de la play 🤣🤣🤣🤣",
        timestamp: new Date(Date.now() - 18 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 28,
      },
      {
        text: "Mientras tanto voy preparando el juego de cartas, está buenísimo, tenes que formar dos grupos y vos tenés que tratar de hacer que tu equipo adivine la mayor cantidad de cartas en el menor tiempo posible. En la carta, abajo aparecen palabras que no podes decir. Está muy bueno!!",
        timestamp: new Date(Date.now() - 17 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 29,
      },
      {
        text: "Que copado amigo, suena re interesante jajaja. Che tenés la direccion del lugar? sino te paso.",
        timestamp: new Date(Date.now() - 16 * 60 * 1000),
        sender: "contact",
        id: 30,
      },
      {
        text: "Sí, la tengo pero pasala igual así la guardo.",
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 31,
      },
      {
        text: "Es en la casa de siempre, la de la esquina con el portón verde.",
        timestamp: new Date(Date.now() - 14 * 60 * 1000),
        sender: "contact",
        id: 32,
      },
      {
        text: "Perfecto, ya sé cuál es 🙂.",
        timestamp: new Date(Date.now() - 13 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 33,
      },
      {
        text: "Vas a venir con alguien?",
        timestamp: new Date(Date.now() - 12 * 60 * 1000),
        sender: "contact",
        id: 34,
      },
      {
        text: "Capaz vaya con mi primo Ale,",
        timestamp: new Date(Date.now() - 11 * 60 * 1000),
        sender: "me",
        status: "read",
        id: 35,
      },
      {
        text: "Sí, de una, que venga si jajajaja.",
        timestamp: new Date(Date.now() - 10 * 60 * 1000),
        sender: "contact",
        id: 36,
      },
    ],
  },
  {
    id: 3,
    name: "Andrea Gómez",
    avatar: "/Avatars/image_0003.webp",
    lastMessage: "No, tranqui, voy directo. Nos vemos allá!",
    lastMessageTime: new Date(Date.now() - 60 * 60 * 1000), // 1 hour
    unreadCount: 1,
    isOnline: true,
    messages: [
      {
        text: "Nos vemos en el café tipo 5?",
        timestamp: new Date(Date.now() - (60 + 16) * 60 * 1000),
        sender: "contact",
        id: 1,
      },
      {
        text: "Dale, ahí nos vemos.",
        timestamp: new Date(Date.now() - (60 + 15) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 2,
      },
      {
        text: "¿Querés que lleve algo?",
        timestamp: new Date(Date.now() - (60 + 14) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 3,
      },
      {
        text: "No hace falta, tranqui.",
        timestamp: new Date(Date.now() - (60 + 13) * 60 * 1000),
        sender: "contact",
        id: 4,
      },
      {
        text: "Bueno, igual llevo unas medialunas por las dudas jaja",
        timestamp: new Date(Date.now() - (60 + 12) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 5,
      },
      {
        text: "Jajaja, sos un crack",
        timestamp: new Date(Date.now() - (60 + 11) * 60 * 1000),
        sender: "contact",
        id: 6,
      },
      {
        text: "¿Te acordás dónde queda el café, no?",
        timestamp: new Date(Date.now() - (60 + 10) * 60 * 1000),
        sender: "contact",
        id: 7,
      },
      {
        text: "Sí, el de siempre, ¿no?",
        timestamp: new Date(Date.now() - (60 + 9) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 8,
      },
      {
        text: "Ese mismo. Igual te paso la ubicación por las dudas.",
        timestamp: new Date(Date.now() - (60 + 8) * 60 * 1000),
        sender: "contact",
        id: 9,
      },
      {
        text: "Dale, mandala así la guardo.",
        timestamp: new Date(Date.now() - (60 + 7) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 10,
      },
      {
        text: "Listo, te la mandé por WhatsApp.",
        timestamp: new Date(Date.now() - (60 + 6) * 60 * 1000),
        sender: "contact",
        id: 11,
      },
      {
        text: "Perfecto, ya la tengo.",
        timestamp: new Date(Date.now() - (60 + 5) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 12,
      },
      {
        text: "¿Vas a ir en auto o en bondi?",
        timestamp: new Date(Date.now() - (60 + 4) * 60 * 1000),
        sender: "contact",
        id: 13,
      },
      {
        text: "Voy en auto, así después te llevo si querés.",
        timestamp: new Date(Date.now() - (60 + 3) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 14,
      },
      {
        text: "Buenísimo, gracias!",
        timestamp: new Date(Date.now() - (60 + 2) * 60 * 1000),
        sender: "contact",
        id: 15,
      },
      {
        text: "¿Querés que pase a buscarte?",
        timestamp: new Date(Date.now() - (60 + 1) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 16,
      },
      {
        text: "No, tranqui, voy directo. Nos vemos allá!",
        timestamp: new Date(Date.now() - 60 * 60 * 1000),
        sender: "contact",
        id: 17,
      },
    ],
  },
  {
    id: 4,
    name: "Alberto Torres",
    avatar: "/Avatars/image_0004.webp",
    lastMessage: "Obvio, te mando foto.",
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Te viste el último capi de la serie?",
        timestamp: new Date(Date.now() - (2 * 60 + 33) * 60 * 1000),
        sender: "contact",
        id: 1,
      },
      {
        text: "Sí! Altísimo final.",
        timestamp: new Date(Date.now() - (2 * 60 + 29) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 2,
      },
      {
        text: "No me esperaba ese giro, posta.",
        timestamp: new Date(Date.now() - (2 * 60 + 28) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 3,
      },
      {
        text: "Yo tampoco, me dejó re manija.",
        timestamp: new Date(Date.now() - (2 * 60 + 25) * 60 * 1000),
        sender: "contact",
        id: 4,
      },
      {
        text: "¿Cuándo sale el próximo?",
        timestamp: new Date(Date.now() - (2 * 60 + 23) * 60 * 1000),
        sender: "contact",
        id: 5,
      },
      {
        text: "Creo que el viernes que viene.",
        timestamp: new Date(Date.now() - (2 * 60 + 22) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 6,
      },
      {
        text: "Uff, falta una banda.",
        timestamp: new Date(Date.now() - (2 * 60 + 20) * 60 * 1000),
        sender: "contact",
        id: 7,
      },
      {
        text: "Encima vi teorías re locas en Twitter.",
        timestamp: new Date(Date.now() - (2 * 60 + 15) * 60 * 1000),
        sender: "contact",
        id: 8,
      },
      {
        text: "Pasame alguna, así me cebás más.",
        timestamp: new Date(Date.now() - (2 * 60 + 12) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 9,
      },
      {
        text: "Después te paso el hilo, está buenísimo.",
        timestamp: new Date(Date.now() - (2 * 60 + 11) * 60 * 1000),
        sender: "contact",
        id: 10,
      },
      {
        text: "Dale, lo leo después de cenar.",
        timestamp: new Date(Date.now() - (2 * 60 + 10) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 11,
      },
      {
        text: "¿Ya comiste?",
        timestamp: new Date(Date.now() - (2 * 60 + 9) * 60 * 1000),
        sender: "contact",
        id: 12,
      },
      {
        text: "Todavía no, estoy viendo qué hago.",
        timestamp: new Date(Date.now() - (2 * 60 + 8) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 13,
      },
      {
        text: "Pedite una pizza, es la que va.",
        timestamp: new Date(Date.now() - (2 * 60 + 6) * 60 * 1000),
        sender: "contact",
        id: 14,
      },
      {
        text: "Me tentaste, ahora llamo a la pizzería.",
        timestamp: new Date(Date.now() - (2 * 60 + 5) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 15,
      },
      {
        text: "Jajaja, después contame si estaba buena.",
        timestamp: new Date(Date.now() - (2 * 60 + 1) * 60 * 1000), // 2 hours 1 min
        sender: "contact",
        id: 16,
      },
      {
        text: "Obvio, te mando foto.",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours
        sender: "me",
        status: "read",
        id: 17,
      },
    ],
  },
  {
    id: 5,
    name: "Franco Fernández",
    avatar: "/Avatars/image_0005.webp",
    lastMessage: "Cualquier cosa avisame, estoy en la compu.",
    lastMessageTime: new Date(Date.now() - (2 * 60 + 10) * 60 * 1000), // 2 hours 10 mins
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Che, necesito una mano con el proyecto.",
        timestamp: new Date(Date.now() - (2 * 60 + 30) * 60 * 1000),
        sender: "contact",
        id: 1,
      },
      {
        text: "Decime nomás, en qué te doy una mano?",
        timestamp: new Date(Date.now() - (2 * 60 + 25) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 2,
      },
      {
        text: "No entiendo bien cómo hacer el login.",
        timestamp: new Date(Date.now() - (2 * 60 + 24) * 60 * 1000),
        sender: "contact",
        id: 3,
      },
      {
        text: "¿Tenés el repo a mano?",
        timestamp: new Date(Date.now() - (2 * 60 + 23) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 4,
      },
      {
        text: "Sí, te lo paso por mail.",
        timestamp: new Date(Date.now() - (2 * 60 + 22) * 60 * 1000),
        sender: "contact",
        id: 5,
      },
      {
        text: "Dale, avisame cuando lo mandes.",
        timestamp: new Date(Date.now() - (2 * 60 + 21) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 6,
      },
      {
        text: "Listo, ya te lo mandé.",
        timestamp: new Date(Date.now() - (2 * 60 + 20) * 60 * 1000),
        sender: "contact",
        id: 7,
      },
      {
        text: "Perfecto, ahora lo miro.",
        timestamp: new Date(Date.now() - (2 * 60 + 19) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 8,
      },
      {
        text: "¿Te paso mi usuario y clave de prueba?",
        timestamp: new Date(Date.now() - (2 * 60 + 18) * 60 * 1000),
        sender: "contact",
        id: 9,
      },
      {
        text: "Sí, así pruebo bien.",
        timestamp: new Date(Date.now() - (2 * 60 + 17) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 10,
      },
      {
        text: "Usuario: franco, clave: 1234",
        timestamp: new Date(Date.now() - (2 * 60 + 16) * 60 * 1000),
        sender: "contact",
        id: 11,
      },
      {
        text: "Listo, ya entré.",
        timestamp: new Date(Date.now() - (2 * 60 + 15) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 12,
      },
      {
        text: "¿Te tira algún error?",
        timestamp: new Date(Date.now() - (2 * 60 + 14) * 60 * 1000),
        sender: "contact",
        id: 13,
      },
      {
        text: "No, pero el botón de login no se desactiva.",
        timestamp: new Date(Date.now() - (2 * 60 + 13) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 14,
      },
      {
        text: "Ah, seguro es por el estado. Fijate si lo actualizás bien.",
        timestamp: new Date(Date.now() - (2 * 60 + 12) * 60 * 1000),
        sender: "contact",
        id: 15,
      },
      {
        text: "Dale, ahora lo reviso.",
        timestamp: new Date(Date.now() - (2 * 60 + 11) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 16,
      },
      {
        text: "Cualquier cosa avisame, estoy en la compu.",
        timestamp: new Date(Date.now() - (2 * 60 + 10) * 60 * 1000), // 2 hours 10 mins
        sender: "contact",
        id: 17,
      },
    ],
  },
  {
    id: 6,
    name: "Jorge Martínez",
    avatar: "/Avatars/image_0006.webp",
    lastMessage: "Gracias, igualmente!",
    lastMessageTime: new Date(Date.now() - (2 * 60 + 30) * 60 * 1000), // 2 hours 30 mins
    unreadCount: 0,
    isOnline: true,
    messages: [
      {
        text: "Hola Jorge, me pasás el apunte de historia?",
        timestamp: new Date(Date.now() - (2 * 60 + 50) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 1,
      },
      {
        text: "Sí, bancá que lo busco.",
        timestamp: new Date(Date.now() - (2 * 60 + 45) * 60 * 1000),
        sender: "contact",
        id: 2,
      },
      {
        text: "Gracias! Me re salvas.",
        timestamp: new Date(Date.now() - (2 * 60 + 44) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 3,
      },
      {
        text: "No hay drama, para eso estamos.",
        timestamp: new Date(Date.now() - (2 * 60 + 43) * 60 * 1000),
        sender: "contact",
        id: 4,
      },
      {
        text: "Te lo mando por mail o por acá?",
        timestamp: new Date(Date.now() - (2 * 60 + 42) * 60 * 1000),
        sender: "contact",
        id: 5,
      },
      {
        text: "Por acá mejor, así lo bajo al toque.",
        timestamp: new Date(Date.now() - (2 * 60 + 41) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 6,
      },
      {
        text: "Listo, ahí va el PDF.",
        timestamp: new Date(Date.now() - (2 * 60 + 40) * 60 * 1000),
        sender: "contact",
        id: 7,
      },
      {
        text: "Llegó perfecto, mil gracias.",
        timestamp: new Date(Date.now() - (2 * 60 + 39) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 8,
      },
      {
        text: "Ya estudiaste algo?",
        timestamp: new Date(Date.now() - (2 * 60 + 38) * 60 * 1000),
        sender: "contact",
        id: 9,
      },
      {
        text: "Un poco, pero me falta banda todavía.",
        timestamp: new Date(Date.now() - (2 * 60 + 37) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 10,
      },
      {
        text: "Tranqui, yo tampoco arranqué fuerte.",
        timestamp: new Date(Date.now() - (2 * 60 + 36) * 60 * 1000),
        sender: "contact",
        id: 11,
      },
      {
        text: "Querés que repasemos juntos después?",
        timestamp: new Date(Date.now() - (2 * 60 + 35) * 60 * 1000),
        sender: "contact",
        id: 12,
      },
      {
        text: "Sí, de una. Hoy a la tarde podés?",
        timestamp: new Date(Date.now() - (2 * 60 + 34) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 13,
      },
      {
        text: "Dale, tipo 5 te va?",
        timestamp: new Date(Date.now() - (2 * 60 + 33) * 60 * 1000),
        sender: "contact",
        id: 14,
      },
      {
        text: "Perfecto, te escribo cuando esté libre.",
        timestamp: new Date(Date.now() - (2 * 60 + 32) * 60 * 1000),
        sender: "me",
        status: "read",
        id: 15,
      },
      {
        text: "Dale, suerte con el estudio!",
        timestamp: new Date(Date.now() - (2 * 60 + 31) * 60 * 1000),
        sender: "contact",
        id: 16,
      },
      {
        text: "Gracias, igualmente!",
        timestamp: new Date(Date.now() - (2 * 60 + 30) * 60 * 1000), // 2 hours 30 mins
        sender: "me",
        status: "read",
        id: 17,
      },
    ],
  },
  {
    id: 7,
    name: "Sofía Ramírez",
    avatar: "/Avatars/image_0007.webp",
    lastMessage: "Gracias genia! 🥳",
    lastMessageTime: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours
    unreadCount: 0,
    isOnline: true,
    messages: [
      {
        text: "Feliz cumple 🎉",
        timestamp: new Date(Date.now() - (3 * 60 + 10) * 60 * 1000),
        sender: "contact",
        id: 1,
      },
      {
        text: "Gracias genia! 🥳",
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
  {
    id: 8,
    name: "Marco Perdomo",
    avatar: "/Avatars/image_0008.webp",
    lastMessage: "Ey Marco, puedo pasar por tu casa a buscar los apuntes?",
    lastMessageTime: new Date(Date.now() - (3 * 60 + 10) * 60 * 1000), // 3 hours 10 mins
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Buen día, revisaste el informe?",
        timestamp: new Date(Date.now() - (3 * 60 + 15) * 60 * 1000),
        sender: "contact",
        id: 1,
      },
      {
        text: "Ey Marco, puedo pasar por tu casa a buscar los apuntes?",
        timestamp: new Date(Date.now() - (3 * 60 + 10) * 60 * 1000), // 3 hours 10 mins
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
  {
    id: 9,
    name: "Paula Lezcano",
    avatar: "/Avatars/image_0009.webp",
    lastMessage: "Hola Pau, sigue estando para pasar a buscarlo?",
    lastMessageTime: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Buen día, miraste el informe?",
        timestamp: new Date(Date.now() - (4 * 60 + 5) * 60 * 1000), // 4 hours 5 mins
        sender: "contact",
        id: 1,
      },
      {
        text: "Hola Pau, sigue estando para pasar a buscarlo?",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
  {
    id: 10,
    name: "Pedro Falcón",
    avatar: "/Avatars/image_0010.webp",
    lastMessage: "Todavía no pude, pero mañana sin falta te lo paso.",
    lastMessageTime: new Date(Date.now() - (4 * 60 + 20) * 60 * 1000), // 4 hours 20 mins
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Buen día, revisaste el informe?",
        timestamp: new Date(Date.now() - (4 * 60 + 22) * 60 * 1000),
        sender: "contact",
        id: 1,
      },
      {
        text: "Todavía no pude, pero mañana sin falta te lo paso.",
        timestamp: new Date(Date.now() - (4 * 60 + 20) * 60 * 1000), // 4 hours 20 mins
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
  {
    id: 11,
    name: "Lucía Méndez",
    avatar: "/Avatars/image_0011.webp",
    lastMessage: "Sí, todo perfecto. Gracias che.",
    lastMessageTime: new Date(Date.now() - (4 * 60 + 25) * 60 * 1000), // 4 hours 25 mins
    unreadCount: 0,
    isOnline: true,
    messages: [
      {
        text: "Te llegó el paquete al final?",
        timestamp: new Date(Date.now() - (4 * 60 + 30) * 60 * 1000), // 4 hours 30 mins
        sender: "contact",
        id: 1,
      },
      {
        text: "Sí, todo perfecto. Gracias che.",
        timestamp: new Date(Date.now() - (4 * 60 + 25) * 60 * 1000), // 4 hours 25 mins
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
  {
    id: 12,
    name: "Diego Rivera",
    avatar: "/Avatars/image_0012.webp",
    lastMessage: "Dale! Voy a estar al toque.",
    lastMessageTime: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Tenemos la reunión a las 3 eh.",
        timestamp: new Date(Date.now() - (5 * 60 + 5) * 60 * 1000), // 5 hours 5 mins
        sender: "contact",
        id: 1,
      },
      {
        text: "Dale! Voy a estar al toque.",
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
  {
    id: 13,
    name: "Valeria Suárez",
    avatar: "/Avatars/image_0013.webp",
    lastMessage: "Obvio! Te lo mando ya.",
    lastMessageTime: new Date(Date.now() - (5 * 60 + 30) * 60 * 1000), // 5 hours 30 mins
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Me pasás el archivo?",
        timestamp: new Date(Date.now() - (5 * 60 + 40) * 60 * 1000), // 5 hours 40 mins
        sender: "contact",
        id: 1,
      },
      {
        text: "Obvio! Te lo mando ya.",
        timestamp: new Date(Date.now() - (5 * 60 + 30) * 60 * 1000), // 5 hours 30 mins
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
  {
    id: 14,
    name: "Camila Quintana",
    avatar: "/Avatars/image_0014.webp",
    lastMessage: "Dale! Después de cenar me conecto.",
    lastMessageTime: new Date(Date.now() - (5 * 60 + 40) * 60 * 1000), // 5 hours 40 mins
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Jugamos esta noche?",
        timestamp: new Date(Date.now() - (5 * 60 + 45) * 60 * 1000), // 5 hours 45 mins
        sender: "contact",
        id: 1,
      },
      {
        text: "Dale! Después de cenar me conecto.",
        timestamp: new Date(Date.now() - (5 * 60 + 40) * 60 * 1000), // 5 hours 40 mins
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
  {
    id: 15,
    name: "Matías Ortega",
    avatar: "/Avatars/image_0015.webp",
    lastMessage: "Sí, ya les respondí. Vos qué onda?",
    lastMessageTime: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours
    unreadCount: 0,
    isOnline: false,
    messages: [
      {
        text: "Viste el correo de RRHH?",
        timestamp: new Date(Date.now() - (6 * 60 + 1) * 60 * 1000), // 6 hours 1 min
        sender: "contact",
        id: 1,
      },
      {
        text: "Sí, ya les respondí. Vos qué onda?",
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours
        sender: "me",
        status: "read",
        id: 2,
      },
    ],
  },
];

// Get next available ID for chats (I think this function should also take the chat stored in LocalStorage)
export const getNextChatId = () => {
  return Math.max(...chatsDB.map((chat) => chat.id)) + 1;
};

// Get next available ID for messages
export const getNextMessageId = (chatId: number) => {
  let chats: chatsDBProps[] = [];
  try {
    const stored = localStorage.getItem("chatsDB");
    chats = stored ? JSON.parse(stored) : [...chatsDB];
  } catch {
    chats = [...chatsDB];
  }
  const chat = chats.find((c) => c.id === chatId);
  if (!chat || !Array.isArray(chat.messages) || chat.messages.length === 0)
    return 1;
  return Math.max(...chat.messages.map((msg) => Number(msg.id) || 0)) + 1;
};
