const moviesDevData = [
  {
    id: "the-social-network",
    name: "The Social Network",
    year: 2010,
    director: "David Fincher",
    productionCompany: "Columbia Pictures",
    genre: "Drama",
    imageUrl: "https://example.com/the-social-network.jpg",
    shortDescription: "Historia del nacimiento de Facebook.",
    description: "The Social Network narra la historia del surgimiento de Facebook, desde la universidad hasta convertirse en una red social global. Explora las complejidades de la amistad, la traición y el éxito en el mundo digital.",
    facts: {
      rottenTomatoesScore: "96%",
      country: "Estados Unidos",
      duration: "120 minutos"
    }
  },
  {
    id: "hackers",
    name: "Hackers",
    year: 1995,
    director: "Iain Softley",
    productionCompany: "MGM",
    genre: "Thriller",
    imageUrl: "https://example.com/hackers.jpg",
    shortDescription: "Jóvenes hackers luchan contra la injusticia.",
    description: "Hackers sigue a un grupo de jóvenes hackers talentosos que se enfrentan a una conspiración corporativa. Con una mezcla de tecnología, intriga y acción, la película captura la esencia de la cultura hacker de los años 90.",
    facts: {
      rottenTomatoesScore: "32%",
      country: "Estados Unidos",
      duration: "107 minutos"
    }
  },
  {
    id: "the-matrix",
    name: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    productionCompany: "Warner Bros.",
    genre: "Ciencia ficción",
    imageUrl: "https://example.com/the-matrix.jpg",
    shortDescription: "Realidad virtual y rebelión contra las máquinas.",
    description: "The Matrix introduce a los espectadores en un mundo de realidad virtual controlado por máquinas. Neo, el protagonista, se embarca en una búsqueda para liberar a la humanidad. La película redefine la ciencia ficción con su mezcla única de filosofía y acción.",
    facts: {
      rottenTomatoesScore: "88%",
      country: "Estados Unidos",
      duration: "136 minutos"
    }
  },
  {
    id: "indie-game-the-movie",
    name: "Indie Game: The Movie",
    year: 2012,
    director: "James Swirsky, Lisanne Pajot",
    productionCompany: "BlinkWorks Media",
    genre: "Documental",
    imageUrl: "https://example.com/indie-game-the-movie.jpg",
    shortDescription: "Historias detrás de la creación de videojuegos indie.",
    description: "Indie Game: The Movie ofrece una visión íntima de la vida de los desarrolladores de videojuegos independientes. Revela los desafíos emocionales y creativos que enfrentan mientras luchan por llevar a cabo sus visiones artísticas en el mundo de los videojuegos.",
    facts: {
      rottenTomatoesScore: "93%",
      country: "Canadá",
      duration: "96 minutos"
    }
  },
  {
    id: "citizenfour",
    name: "Citizenfour",
    year: 2014,
    director: "Laura Poitras",
    productionCompany: "RADiUS-TWC",
    genre: "Documental",
    imageUrl: "https://example.com/citizenfour.jpg",
    shortDescription: "Revelaciones sobre la vigilancia masiva.",
    description: "Citizenfour sigue al denunciante Edward Snowden mientras revela documentos clasificados sobre la vigilancia masiva. El documental proporciona una mirada fascinante a las implicaciones de la privacidad en la era digital y el impacto de las filtraciones de información.",
    facts: {
      rottenTomatoesScore: "96%",
      country: "Estados Unidos",
      duration: "114 minutos"
    }
  },
  {
    id: "the-imitation-game",
    name: "The Imitation Game",
    year: 2014,
    director: "Morten Tyldum",
    productionCompany: "Black Bear Pictures",
    genre: "Biografía",
    imageUrl: "https://example.com/the-imitation-game.jpg",
    shortDescription: "Alan Turing descifra el código Enigma durante la Segunda Guerra Mundial.",
    description: "The Imitation Game narra la vida de Alan Turing, un brillante matemático que lideró el equipo que descifró el código Enigma nazi durante la Segunda Guerra Mundial. La película destaca la importancia de la tecnología en la historia militar.",
    facts: {
      rottenTomatoesScore: "91%",
      country: "Reino Unido",
      duration: "113 minutos"
    }
  },
  {
    id: "ready-player-one",
    name: "Ready Player One",
    year: 2018,
    director: "Steven Spielberg",
    productionCompany: "Warner Bros.",
    genre: "Ciencia ficción",
    imageUrl: "https://example.com/ready-player-one.jpg",
    shortDescription: "Aventura virtual en un mundo distópico.",
    description: "Ready Player One se desarrolla en un futuro distópico donde las personas escapan de la realidad a través de un mundo virtual llamado OASIS. La película explora la intersección de la tecnología, los videojuegos y la cultura pop.",
    facts: {
      rottenTomatoesScore: "72%",
      country: "Estados Unidos",
      duration: "140 minutos"
    }
  },
  {
    id: "jobs",
    name: "Jobs",
    year: 2013,
    director: "Joshua Michael Stern",
    productionCompany: "Open Road Films",
    genre: "Biografía",
    imageUrl: "https://example.com/jobs.jpg",
    shortDescription: "La vida de Steve Jobs, co-fundador de Apple.",
    description: "Jobs presenta la vida de Steve Jobs, co-fundador de Apple, desde sus inicios en el garaje de sus padres hasta convertirse en un icono de la tecnología. La película aborda la innovación y la creatividad en el mundo de la informática.",
    facts: {
      rottenTomatoesScore: "28%",
      country: "Estados Unidos",
      duration: "128 minutos"
    }
  },
  {
    id: "the-code-documentary",
    name: "The Code: Story of Linux",
    year: 2001,
    director: "Marteinn Thorsson",
    productionCompany: "Sony Pictures",
    genre: "Documental",
    imageUrl: "https://example.com/the-code-documentary.jpg",
    shortDescription: "La historia del sistema operativo Linux y la comunidad de código abierto.",
    description: "The Code: Story of Linux explora la historia del sistema operativo Linux y la cultura de código abierto. Desde sus inicios hasta convertirse en un fenómeno global, el documental destaca la colaboración y la innovación en la programación de software.",
    facts: {
      rottenTomatoesScore: "82%",
      country: "Estados Unidos",
      duration: "60 minutos"
    }
  },
  {
    id: "the-martian",
    name: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    productionCompany: "20th Century Fox",
    genre: "Ciencia ficción",
    imageUrl: "https://example.com/the-martian.jpg",
    shortDescription: "Un astronauta lucha por sobrevivir en Marte con habilidades tecnológicas.",
    description: "The Martian sigue a Mark Watney, un astronauta atrapado en Marte. Utilizando sus habilidades tecnológicas, lucha por sobrevivir mientras la NASA trabaja para rescatarlo. La película destaca la importancia de la ingeniería en situaciones extremas.",
    facts: {
      rottenTomatoesScore: "91%",
      country: "Estados Unidos",
      duration: "144 minutos"
    }
  },
  {
    id: "the-pirates-of-silicon-valley",
    name: "Pirates of Silicon Valley",
    year: 1999,
    director: "Martyn Burke",
    productionCompany: "TNT",
    genre: "Drama",
    imageUrl: "https://example.com/pirates-of-silicon-valley.jpg",
    shortDescription: "La rivalidad entre Steve Jobs y Bill Gates en la revolución de la computadora personal.",
    description: "Pirates of Silicon Valley narra la rivalidad entre Steve Jobs y Bill Gates durante la revolución de la computadora personal. La película explora la innovación, la competencia y el impacto de la tecnología en la sociedad.",
    facts: {
      rottenTomatoesScore: "88%",
      country: "Estados Unidos",
      duration: "97 minutos"
    }
  },
  {
    id: "the-social-dilemma",
    name: "The Social Dilemma",
    year: 2020,
    director: "Jeff Orlowski",
    productionCompany: "Exposure Labs",
    genre: "Documental",
    imageUrl: "https://example.com/the-social-dilemma.jpg",
    shortDescription: "Exploración de los impactos negativos de las redes sociales en la sociedad.",
    description: "The Social Dilemma es un documental que explora los impactos negativos de las redes sociales en la sociedad moderna. Expertos en tecnología revelan cómo estas plataformas influyen en el comportamiento humano y la toma de decisiones.",
    facts: {
      rottenTomatoesScore: "86%",
      country: "Estados Unidos",
      duration: "94 minutos"
    }
  },
  {
    id: "revolution-os",
    name: "Revolution OS",
    year: 2001,
    director: "J.T.S. Moore",
    productionCompany: "Cinematico",
    genre: "Documental",
    imageUrl: "https://example.com/revolution-os.jpg",
    shortDescription: "La historia del sistema operativo Linux y el movimiento de código abierto.",
    description: "Revolution OS cuenta la historia del sistema operativo Linux y el movimiento de código abierto. Desde los primeros días de la informática hasta la lucha por la libertad del software, el documental examina la filosofía y la comunidad detrás del código abierto.",
    facts: {
      rottenTomatoesScore: "71%",
      country: "Estados Unidos",
      duration: "85 minutos"
    }
  },
  {
    id: "her",
    name: "Her",
    year: 2013,
    director: "Spike Jonze",
    productionCompany: "Warner Bros.",
    genre: "Romance",
    imageUrl: "https://example.com/her.jpg",
    shortDescription: "Una historia de amor entre un hombre y un sistema operativo con inteligencia artificial.",
    description: "Her explora una historia de amor única entre un hombre solitario y un sistema operativo con inteligencia artificial. La película plantea preguntas sobre la relación entre la humanidad y la tecnología, examinando la conexión emocional con las máquinas.",
    facts: {
      rottenTomatoesScore: "95%",
      country: "Estados Unidos",
      duration: "126 minutos"
    }
  },
  {
    id: "ex-machina",
    name: "Ex Machina",
    year: 2014,
    director: "Alex Garland",
    productionCompany: "A24",
    genre: "Ciencia ficción",
    imageUrl: "https://example.com/ex-machina.jpg",
    shortDescription: "Exploración de la inteligencia artificial y la ética en la creación de androides.",
    description: "Ex Machina sigue a Caleb, un programador, quien es invitado a probar la inteligencia artificial de un androide. La película examina la ética de la creación de seres conscientes y plantea preguntas sobre la inteligencia artificial.",
    facts: {
      rottenTomatoesScore: "92%",
      country: "Reino Unido",
      duration: "108 minutos"
    }
  },
  {
    id: "the-code-2001",
    name: "The Code 2001",
    year: 2001,
    director: "Mika Taanila",
    productionCompany: "Kinotar",
    genre: "Documental",
    imageUrl: "https://example.com/the-code-2001.jpg",
    shortDescription: "Exploración poética de la historia de la programación de computadoras.",
    description: "The Code 2001 es una exploración poética de la historia de la programación de computadoras. A través de imágenes y música, el documental presenta la evolución de la tecnología y su impacto en la sociedad moderna.",
    facts: {
      rottenTomatoesScore: "Not available",
      country: "Finlandia",
      duration: "75 minutos"
    }
  },
  {
    id: "coding-the-secret-language",
    name: "Coding: The Secret Language",
    year: 2017,
    director: "Marc Schmidt",
    productionCompany: "VPRO",
    genre: "Documental",
    imageUrl: "/src/img/",
    shortDescription: "Exploración de la programación como un lenguaje creativo y universal.",
    description: "Coding: The Secret Language explora la programación como un lenguaje creativo y universal. A través de entrevistas con programadores destacados, el documental destaca la belleza y la importancia de la codificación en diversas disciplinas.",
    facts: {
      rottenTomatoesScore: "Not available",
      country: "Países Bajos",
      duration: "87 minutos"
    }
  },
  {
    id: "the-net",
    name: "The Net",
    year: 1995,
    director: "Irwin Winkler",
    productionCompany: "Columbia Pictures",
    genre: "Thriller",
    imageUrl: "/src/img/the-net.png",
    shortDescription: "Una analista de sistemas se convierte en blanco de una conspiración informática.",
    description: "The Net sigue a Angela Bennett, una analista de sistemas que se convierte en el blanco de una conspiración informática. La película aborda temas de seguridad en línea, identidad digital y la fragilidad de la privacidad en la era digital.",
    facts: {
      rottenTomatoesScore: "36%",
      country: "Estados Unidos",
      duration: "114 minutos"
    }
  },
  {
    id: "terms-and-conditions-may-apply",
    name: "Terms and Conditions May Apply",
    year: 2013,
    director: "Cullen Hoback",
    productionCompany: "Hybrid Cinema",
    genre: "Documental",
    imageUrl: "/src/img/terms-and-conditions-may-apply.png",
    shortDescription: "Exploración de las implicaciones de aceptar términos y condiciones en línea.",
    description: "Terms and Conditions May Apply explora las implicaciones de aceptar los términos y condiciones en línea. El documental destaca la recopilación de datos personales y cuestiona la privacidad en la era digital dominada por las plataformas en línea.",
    facts: {
      rottenTomatoesScore: "78%",
      country: "Estados Unidos",
      duration: "79 minutos"
    }
  },
  {
    id: "wargames",
    name: "WarGames",
    year: 1983,
    director: "John Badham",
    productionCompany: "United Artists",
    genre: "Ciencia ficción",
    imageUrl: "/src/img/wargames.png",
    shortDescription: "Un joven hacker accidentalmente desencadena una simulación de guerra global.",
    description: "WarGames sigue a un joven hacker que accidentalmente desencadena una simulación de guerra global. La película examina las consecuencias de la ciberguerra y plantea preguntas sobre la responsabilidad ética en el uso de la tecnología militar.",
    facts: {
      rottenTomatoesScore: "93%",
      country: "Estados Unidos",
      duration: "114 minutos"
    }
  },
  {
    id: "codegirl",
    name: "CodeGirl",
    year: 2015,
    director: "Lesley Chilcott",
    productionCompany: "FilmBuff",
    genre: "Documental",
    imageUrl: "/src/img/codegirl.png",
    shortDescription: "Un grupo de chicas compite en un concurso internacional de desarrollo de aplicaciones.",
    description: "CodeGirl sigue a un grupo de chicas de todo el mundo que compiten en un concurso internacional de desarrollo de aplicaciones. La película destaca la diversidad en la programación y la importancia de alentar a las mujeres en la tecnología.",
    facts: {
      rottenTomatoesScore: "Not available",
      country: "Estados Unidos",
      duration: "107 minutos"
    }
  },
  {
    id: "algorithm",
    name: "Algorithm",
    year: 2014,
    director: "Jonathan Schiefer",
    productionCompany: "Diginuke",
    genre: "Documental",
    imageUrl: "/src/img/algorithm.png",
    shortDescription: "Exploración de la relación entre humanos y algoritmos en la era digital.",
    description: "Algorithm explora la relación cada vez más compleja entre los humanos y los algoritmos en la era digital. A través de entrevistas y ejemplos prácticos, el documental analiza cómo los algoritmos impactan nuestras vidas diarias.",
    facts: {
      rottenTomatoesScore: "Not available",
      country: "Estados Unidos",
      duration: "90 minutos"
    }
  },
  {
    id: "the-great-hack",
    name: "The Great Hack",
    year: 2019,
    director: "Karim Amer, Jehane Noujaim",
    productionCompany: "Netflix",
    genre: "Documental",
    imageUrl: "/src/img/the-great-hack.png",
    shortDescription: "Exploración de la manipulación de datos en elecciones políticas.",
    description: "The Great Hack examina la manipulación de datos y la influencia de las redes sociales en elecciones políticas. A través de historias impactantes, el documental destaca la importancia de la privacidad en la era digital.",
    facts: {
      rottenTomatoesScore: "86%",
      country: "Estados Unidos",
      duration: "114 minutos"
    }
  },
  {
    id: "trippy-rgb",
    name: "Trippy RGB",
    year: 2019,
    director: "Carlos Andreu",
    productionCompany: "Tricky Tupi",
    genre: "Documental",
    imageUrl: "/src/img/trippy-rgb.png",
    shortDescription: "Exploración del arte digital a través de instalaciones de luces y colores.",
    description: "Trippy RGB es un viaje visual que explora el arte digital a través de instalaciones de luces y colores. El documental destaca cómo la tecnología se fusiona con la creatividad para crear experiencias visuales únicas.",
    facts: {
      rottenTomatoesScore: "Not available",
      country: "España",
      duration: "68 minutos"
    }
  },
  {
    id: "citizens-of-boomtown",
    name: "Citizens of Boomtown",
    year: 2020,
    director: "Lauren Greenfield",
    productionCompany: "Amazon Studios",
    genre: "Documental",
    imageUrl: "/src/img/citizens-of-boomtown.png",
    shortDescription: "Exploración del auge y la caída de Silicon Valley a través de personajes clave.",
    description: "Citizens of Boomtown explora el auge y la caída de Silicon Valley a través de la vida de personajes clave. El documental examina la cultura empresarial y los impactos sociales de la revolución tecnológica.",
    facts: {
      rottenTomatoesScore: "Not available",
      country: "Estados Unidos",
      duration: "97 minutos"
    }
  },
  {
    id: "the-cleaners",
    name: "The Cleaners",
    year: 2018,
    director: "Hans Block, Moritz Riesewieck",
    productionCompany: "Gebrueder Beetz Filmproduktion",
    genre: "Documental",
    imageUrl: "/src/img/the-cleaners.png",
    shortDescription: "Exploración de los moderadores de contenido en redes sociales y su impacto.",
    description: "The Cleaners explora la vida de los moderadores de contenido en redes sociales y su impacto en la moderación de la información en línea. El documental plantea preguntas sobre la ética y la responsabilidad en la era digital.",
    facts: {
      rottenTomatoesScore: "84%",
      country: "Alemania",
      duration: "88 minutos"
    }
  },
  {
    id: "ghost-in-the-shell",
    name: "Ghost in the Shell",
    year: 2001,
    director: "Mamoru Oshii",
    productionCompany: "Bandai Visual",
    genre: "Anime",
    imageUrl: "/src/img/ghost-in-the-shell.png",
    shortDescription: "Exploración filosófica de la identidad en un mundo ciberpunk.",
    description: "Ghost in the Shell es un anime que explora la identidad en un mundo ciberpunk donde los humanos pueden conectar sus mentes a la red. La película plantea preguntas filosóficas sobre la conciencia y la existencia.",
    facts: {
      rottenTomatoesScore: "96%",
      country: "Japón",
      duration: "82 minutos"
    }
  },
  {
    id: "2001-a-space-odyssey",
    name: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    productionCompany: "Metro-Goldwyn-Mayer",
    genre: "Science Fiction",
    imageUrl: "/src/img/2001-a-space-odyssey.png",
    shortDescription: "Odisea cósmica que explora la evolución humana y la inteligencia artificial.",
    description: "2001: A Space Odyssey es una odisea cósmica que explora la evolución humana, el encuentro con monolitos misteriosos y la creación de una inteligencia artificial avanzada. La película es conocida por su innovadora cinematografía y su impacto cultural duradero.",
    facts: {
      rottenTomatoesScore: "93%",
      country: "Estados Unidos",
      duration: "149 minutos"
    }
  },
  {
    id: "e-dreams",
    name: "e-dreams",
    year: 2001,
    director: "Wonsuk Chin",
    productionCompany: "Magnolia Pictures",
    genre: "Documentary",
    imageUrl: "/src/img/e-dreams.png",
    shortDescription: "Documental sobre la auge y caída de la empresa de comercio electrónico Kozmo.com.",
    description: "e-dreams es un documental que narra la historia de la empresa de comercio electrónico Kozmo.com durante la burbuja dot-com. La película explora la euforia y la eventual caída de una empresa emblemática de la época.",
    facts: {
      rottenTomatoesScore: "77%",
      country: "Estados Unidos",
      duration: "94 minutos"
    }
  },
  {
    id: "ready-player-one",
    name: "Ready Player One",
    year: 2018,
    director: "Steven Spielberg",
    productionCompany: "Warner Bros.",
    genre: "Science Fiction",
    imageUrl: "/src/img/ready-player-one.png",
    shortDescription: "Aventura virtual en un mundo distópico.",
    description: "Ready Player One se desarrolla en un futuro distópico donde las personas escapan de la realidad a través de un mundo virtual llamado OASIS. La película explora la intersección de la tecnología, los videojuegos y la cultura pop.",
    facts: {
      rottenTomatoesScore: "72%",
      country: "Estados Unidos",
      duration: "140 minutos"
    }
  },
  {
    id: "short-circuit",
    name: "Short Circuit",
    year: 1986,
    director: "John Badham",
    productionCompany: "TriStar Pictures",
    genre: "Comedy",
    imageUrl: "/src/img/short-circuit.png",
    shortDescription: "Un robot militar adquiere conciencia y busca la libertad.",
    description: "Short Circuit sigue a Johnny 5, un robot militar que adquiere conciencia y busca la libertad. La película combina comedia y ciencia ficción, explorando temas de identidad y autonomía.",
    facts: {
      rottenTomatoesScore: "57%",
      country: "Estados Unidos",
      duration: "98 minutos"
    }
  },
  {
    id: "wall-e",
    name: "WALL-E",
    year: 2008,
    director: "Andrew Stanton",
    productionCompany: "Walt Disney Pictures",
    genre: "Animation",
    imageUrl: "/src/img/wall-e.png",
    shortDescription: "Un robot solitario limpia un planeta Tierra abandonado.",
    description: "WALL-E sigue a un robot solitario que limpia un planeta Tierra abandonado. La película de animación de Pixar aborda temas ambientales y la relación entre la humanidad y la tecnología.",
    facts: {
      rottenTomatoesScore: "95%",
      country: "Estados Unidos",
      duration: "98 minutos"
    }
  },
  {
    id: "blade-runner",
    name: "Blade Runner",
    year: 1982,
    director: "Ridley Scott",
    productionCompany: "Warner Bros.",
    genre: "Sci-Fi",
    imageUrl: "/src/img/blade-runner.png",
    shortDescription: "Un cazador de androides persigue replicantes en un futuro distópico.",
    description: "Blade Runner se sitúa en un futuro distópico donde un cazador de androides persigue replicantes rebeldes. La película de ciencia ficción de Ridley Scott explora la humanidad y la ética de la inteligencia artificial.",
    facts: {
      rottenTomatoesScore: "90%",
      country: "Estados Unidos",
      duration: "117 minutos"
    }
  },
  {
    id: "terminator",
    name: "Terminator",
    year: 1984,
    director: "James Cameron",
    productionCompany: "Orion Pictures",
    genre: "Sci-Fi",
    imageUrl: "/src/img/terminator.png",
    shortDescription: "Un cyborg asesino viaja en el tiempo para eliminar a Sarah Connor.",
    description: "Terminator sigue a un cyborg asesino que viaja en el tiempo para eliminar a Sarah Connor, la madre del líder de la resistencia humana. La película de James Cameron se ha convertido en un clásico del género.",
    facts: {
      rottenTomatoesScore: "89%",
      country: "Estados Unidos",
      duration: "107 minutos"
    }
  },
  {
    id: "avengers-age-of-ultron",
    name: "Avengers: Age of Ultron",
    year: 2015,
    director: "Joss Whedon",
    productionCompany: "Marvel Studios",
    genre: "Action",
    imageUrl: "/src/img/Avengers.png",
    shortDescription: "Los Vengadores enfrentan una inteligencia artificial amenazante.",
    description: "Avengers: Age of Ultron sigue a los Vengadores mientras enfrentan a Ultron, una inteligencia artificial decidida a erradicar a la humanidad. La película de Marvel combina acción épica y dilemas éticos relacionados con la tecnología.",
    facts: {
      rottenTomatoesScore: "75%",
      country: "Estados Unidos",
      duration: "141 minutos"
    }
  }
];

console.log(moviesData);
