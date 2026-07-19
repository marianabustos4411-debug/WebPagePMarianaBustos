export const whoAmIPages = [
  {
    leftPage: {
      title: "¿Quién soy?",
      content: [
        "Soy una cineasta multidisciplinaria y artista visual originaria de Ciudad de México, egresada de la licenciatura en Cine y Animación Digital por la Universidad de Tecnologías Avanzadas (UNIAT). Mi trabajo nace de la búsqueda por transformar emociones, recuerdos y espacios en experiencias visuales que conecten con quienes las observan."
      ]
    },
    rightPage: {
      type: "image",
      src: "", // Will render a beautiful placeholder inside the Notebook component if empty
      placeholder: "[ foto mia ]"
    }
  },
  {
    leftPage: {
      title: "¿Quién soy?",
      content: [
        "Me interesa explorar la relación entre el cine, el diseño, el guion, la animación y el mixed-media, combinando procesos digitales y análogos para construir narrativas donde la textura, la luz, el color y el sonido se convierten en parte esencial del lenguaje. Concibo cada proyecto como una oportunidad para crear historias que permanezcan en la memoria, despierten curiosidad, inviten a la reflexión y generen una conexión emocional con el espectador."
      ]
    },
    rightPage: {
      type: "image",
      src: "",
      placeholder: "[ fotograma de cortometraje ]"
    }
  }
];

export const artProjects = [
  {
    id: "ecos-de-papel",
    title: "Ecos de Papel",
    category: "Dirección de Arte / Cortometraje",
    description: "Diseño de sets y puppets análogos utilizando técnicas de collage, papel arrugado y acuarelas, digitalizados para animación stop-motion.",
    year: "2025",
    mediaType: "image",
    placeholderText: "Dirección de Arte: Ecos de Papel"
  },
  {
    id: "memorias-de-mar",
    title: "Memorias de Mar",
    category: "Animación Experimental",
    description: "Fusión de pintura al óleo sobre vidrio y animación digital en 3D para recrear la fluidez y nostalgia del océano profundo.",
    year: "2024",
    mediaType: "image",
    placeholderText: "Estética Visual: Memorias de Mar"
  },
  {
    id: "diario-ciudad",
    title: "Diario de una Ciudad",
    category: "Ensayo Documental / Super 8",
    description: "Investigación visual basada en metraje de archivo, periódicos antiguos y grabaciones ambientales de la Ciudad de México.",
    year: "2023",
    mediaType: "image",
    placeholderText: "Metraje: Diario de una Ciudad"
  },
  {
    id: "estudio-texturas",
    title: "Estudio de Textura Cromática",
    category: "Dirección de Arte",
    description: "Exploración de la paleta de color rojo vino y plata sobre soportes desgastados para definir la línea estética del portfolio.",
    year: "2025",
    mediaType: "image",
    placeholderText: "Estudio de Color y Textura"
  }
];

export const screenplaySnippets = [
  {
    id: "script-1",
    title: "Ecos de Papel",
    scene: "ESCENA 4. INTERIOR. HABITACIÓN DE ANA - NOCHE",
    content: `ANA (24) está sentada frente al escritorio de madera carcomida. La única luz proviene de una lámpara de mesa temblorosa. 

Sobre la mesa, recortes de periódico y fotografías antiguas se esparcen como piezas de un rompecabezas sin resolver.

ANA
(susurrando, sin apartar la mirada)
No son solo papeles. Tienen voz.

Ella pasa la yema de su dedo índice por el borde de una foto quemada. Un leve susurro de olas rompiendo invade la habitación.`,
    notes: "Nota de Dirección: El sonido del mar debe entrar de forma sutil, mezclándose con el zumbido de la lámpara. La imagen se decolora hacia un tono plata."
  },
  {
    id: "script-2",
    title: "Diario de una Ciudad",
    scene: "ESCENA 12. EXTERIOR. CALLE DE LA REGINA - LLUVIA",
    content: `Un plano cerrado de los charcos en el pavimento. Las gotas de lluvia rompen el reflejo de las luces de neón rojas del hotel de enfrente.

Voz en off (ANA)
La lluvia borra las caras, pero la piedra guarda los pasos.

Una mano arrugada entra a cuadro y recoge un boleto de tranvía empapado del agua.`,
    notes: "Nota de Dirección: Capturar en Super 8 con emulsión de alto contraste. El color rojo del neón debe sangrar en el revelado."
  }
];

export const journalEntries = [
  {
    id: "entry-1",
    date: "12 de Octubre, 2025",
    title: "La fisicalidad del tiempo",
    excerpt: "Hoy revelé los rollos de 16mm que grabamos en el puerto. El agua salada filtró el chasis y dejó marcas de corrosión en los bordes. El accidente mejoró el plano...",
    content: "Hoy revelé los rollos de 16mm que grabamos en el puerto. El agua salada filtró el chasis y dejó marcas de corrosión química en los bordes de la película. Lo que en teoría sería un desastre de laboratorio, terminó dándole al plano una atmósfera espectral única. El error fotográfico como puerta de entrada a la poesía visual.",
    imagePlaceholder: "Polaroid: Emulsión dañada"
  },
  {
    id: "entry-2",
    date: "4 de Agosto, 2025",
    title: "Cuaderno de bocetos y acuarelas",
    excerpt: "Dibujando el storyboard para el nuevo proyecto. Prefiero manchar el papel con café y tinta antes de pasar al software. Las ideas fluyen a través del tacto...",
    content: "Dibujando el storyboard para el nuevo proyecto. Prefiero manchar el papel con café diluido y tinta china antes de siquiera tocar la computadora. El software es fantástico para refinar, pero las ideas nacen del tacto, de la fricción del grafito sobre el papel poroso. Necesito sentir el límite de la hoja física.",
    imagePlaceholder: "Polaroid: Storyboard de café"
  }
];
