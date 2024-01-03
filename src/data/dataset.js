const data = [
  {
    "id": "the-social-network",
    "name": "The Social Network",
    "shortDescription": "Historia del nacimiento de Facebook.",
    "description": "The Social Network narra la historia del surgimiento de Facebook, desde la universidad hasta convertirse en una red social global. Explora las complejidades de la amistad, la traición y el éxito en el mundo digital.",
    "imageUrl": "/src/img/the-social-network.jpeg",
    "facts": {
      "year": 2010,
      "director": "David Fincher",
      "productionCompany": "Columbia Pictures",
      "genre": "Drama"
    },
    "extraInfo": {
      "rottenTomatoesScore": "96%",
      "country": "Estados Unidos",
      "duration": "120 minutos"
    }
  },
  {
    "id": "hackers",
    "name": "Hackers",
    "shortDescription": "Jóvenes hackers luchan contra la injusticia.",
    "description": "Hackers sigue a un grupo de jóvenes hackers talentosos que se enfrentan a una conspiración corporativa. Con una mezcla de tecnología, intriga y acción, la película captura la esencia de la cultura hacker de los años 90.",
    "imageUrl": "/src/img/hackers.png",
    "facts": {
      "year": 1995,
      "director": "Iain Softley",
      "productionCompany": "MGM",
      "genre": "Thriller"
    },
    "extraInfo": {
      "rottenTomatoesScore": "32%",
      "country": "Estados Unidos",
      "duration": "107 minutos"
    }
  },
  {
    "id": "the-matrix",
    "name": "The Matrix",
    "shortDescription": "Realidad virtual y rebelión contra las máquinas.",
    "description": "The Matrix introduce a los espectadores en un mundo de realidad virtual controlado por máquinas. Neo, el protagonista, se embarca en una búsqueda para liberar a la humanidad. La película redefine la ciencia ficción con su mezcla única de filosofía y acción.",
    "imageUrl": "/src/img//the-matrix.jpeg",
    "facts": {
      "year": 1999,
      "director": "The Wachowskis",
      "productionCompany": "Warner Bros.",
      "genre": "Ciencia ficción"
    },
    "extraInfo": {
      "rottenTomatoesScore": "88%",
      "country": "Estados Unidos",
      "duration": "136 minutos"
    }
  },
  {
    "id": "indie-game-the-movie",
    "name": "Indie Game: The Movie",
    "shortDescription": "Historias detrás de la creación de videojuegos indie.",
    "description": "Indie Game: The Movie ofrece una visión íntima de la vida de los desarrolladores de videojuegos independientes. Revela los desafíos emocionales y creativos que enfrentan mientras luchan por llevar a cabo sus visiones artísticas en el mundo de los videojuegos.",
    "imageUrl": "/src/img//indie-game-the-movie.jpeg",
    "facts": {
      "year": 2012,
      "director": "James Swirsky, Lisanne Pajot",
      "productionCompany": "BlinkWorks Media",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "93%",
      "country": "Canadá",
      "duration": "96 minutos"
    }
  },
  {
    "id": "citizenfour",
    "name": "Citizenfour",
    "shortDescription": "Revelaciones sobre la vigilancia masiva.",
    "description": "Citizenfour sigue al denunciante Edward Snowden mientras revela documentos clasificados sobre la vigilancia masiva. El documental proporciona una mirada fascinante a las implicaciones de la privacidad en la era digital y el impacto de las filtraciones de información.",
    "imageUrl": "/src/img//citizenfour.jpeg",
    "facts": {
      "year": 2014,
      "director": "Laura Poitras",
      "productionCompany": "RADiUS-TWC",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "96%",
      "country": "Estados Unidos",
      "duration": "114 minutos"
    }
  },
  {
    "id": "the-imitation-game",
    "name": "The Imitation Game",
    "shortDescription": "Alan Turing descifra el código Enigma durante la Segunda Guerra Mundial.",
    "description": "The Imitation Game narra la vida de Alan Turing, un brillante matemático que lideró el equipo que descifró el código Enigma nazi durante la Segunda Guerra Mundial. La película destaca la importancia de la tecnología en la historia militar.",
    "imageUrl": "/src/img/the-imitation-game.jpeg",
    "facts": {
      "year": 2014,
      "director": "Morten Tyldum",
      "productionCompany": "Black Bear Pictures",
      "genre": "Biografía"
    },
    "extraInfo": {
      "rottenTomatoesScore": "91%",
      "country": "Reino Unido",
      "duration": "113 minutos"
    }
  },
  {
    "id": "jobs",
    "name": "Jobs",
    "shortDescription": "La vida de Steve Jobs, co-fundador de Apple.",
    "description": "Jobs presenta la vida de Steve Jobs, co-fundador de Apple, desde sus inicios en el garaje de sus padres hasta convertirse en un icono de la tecnología. La película aborda la innovación y la creatividad en el mundo de la informática.",
    "imageUrl": "/src/img/jobs.jpeg",
    "facts": {
      "year": 2013,
      "director": "Joshua Michael Stern",
      "productionCompany": "Open Road Films",
      "genre": "Biografía"
    },
    "extraInfo": {
      "rottenTomatoesScore": "28%",
      "country": "Estados Unidos",
      "duration": "128 minutos"
    }
  },
  {
    "id": "the-martian",
    "name": "The Martian",
    "shortDescription": "Un astronauta lucha por sobrevivir en Marte con habilidades tecnológicas.",
    "description": "The Martian sigue a Mark Watney, un astronauta atrapado en Marte. Utilizando sus habilidades tecnológicas, lucha por sobrevivir mientras la NASA trabaja para rescatarlo. La película destaca la importancia de la ingeniería en situaciones extremas.",
    "imageUrl": "/src/img/the-martian.jpeg",
    "facts": {
      "year": 2015,
      "director": "Ridley Scott",
      "productionCompany": "20th Century Fox",
      "genre": "Ciencia ficción"
    },
    "extraInfo": {
      "rottenTomatoesScore": "91%",
      "country": "Estados Unidos",
      "duration": "144 minutos"
    }
  },
  {
    "id": "the-pirates-of-silicon-valley",
    "name": "Pirates of Silicon Valley",
    "shortDescription": "La rivalidad entre Steve Jobs y Bill Gates en la revolución de la computadora personal.",
    "description": "Pirates of Silicon Valley narra la rivalidad entre Steve Jobs y Bill Gates durante la revolución de la computadora personal. La película explora la innovación, la competencia y el impacto de la tecnología en la sociedad.",
    "imageUrl": "/src/img/the-pirates-of-silicon-valley.jpeg",
    "facts": {
      "year": 1999,
      "director": "Martyn Burke",
      "productionCompany": "TNT",
      "genre": "Drama"
    },
    "extraInfo": {
      "rottenTomatoesScore": "88%",
      "country": "Estados Unidos",
      "duration": "97 minutos"
    }
  },
  {
    "id": "the-social-dilemma",
    "name": "The Social Dilemma",
    "shortDescription": "Exploración de los impactos negativos de las redes sociales en la sociedad.",
    "description": "The Social Dilemma es un documental que explora los impactos negativos de las redes sociales en la sociedad moderna. Expertos en tecnología revelan cómo estas plataformas influyen en el comportamiento humano y la toma de decisiones.",
    "imageUrl": "/src/img/the-social-dilemma.jpeg",
    "facts": {
      "year": 2020,
      "director": "Jeff Orlowski",
      "productionCompany": "Exposure Labs",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "86%",
      "country": "Estados Unidos",
      "duration": "94 minutos"
    }
  },
  {
    "id": "revolution-os",
    "name": "Revolution OS",
    "shortDescription": "La historia del sistema operativo Linux y el movimiento de código abierto.",
    "description": "Revolution OS cuenta la historia del sistema operativo Linux y el movimiento de código abierto. Desde los primeros días de la informática hasta la lucha por la libertad del software, el documental examina la filosofía y la comunidad detrás del código abierto.",
    "imageUrl": "/src/img/revolution-os.jpeg",
    "facts": {
      "year": 2001,
      "director": "J.T.S. Moore",
      "productionCompany": "Cinematico",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "71%",
      "country": "Estados Unidos",
      "duration": "85 minutos"
    }
  },
  {
    "id": "her",
    "name": "Her",
    "shortDescription": "Una historia de amor entre un hombre y un sistema operativo con inteligencia artificial.",
    "description": "Her explora una historia de amor única entre un hombre solitario y un sistema operativo con inteligencia artificial. La película plantea preguntas sobre la relación entre la humanidad y la tecnología, examinando la conexión emocional con las máquinas.",
    "imageUrl": "/src/img/her.png",
    "facts": {
      "year": 2013,
      "director": "Spike Jonze",
      "productionCompany": "Warner Bros.",
      "genre": "Romance"
    },
    "extraInfo": {
      "rottenTomatoesScore": "95%",
      "country": "Estados Unidos",
      "duration": "126 minutos"
    }
  },
  {
    "id": "ex-machina",
    "name": "Ex Machina",
    "shortDescription": "Exploración de la inteligencia artificial y la ética en la creación de androides.",
    "description": "Ex Machina sigue a Caleb, un programador, quien es invitado a probar la inteligencia artificial de un androide. La película examina la ética de la creación de seres conscientes y plantea preguntas sobre la inteligencia artificial.",
    "imageUrl": "/src/img/ex-machina.jpeg",
    "facts": {
      "year": 2014,
      "director": "Alex Garland",
      "productionCompany": "A24",
      "genre": "Ciencia ficción"
    },
    "extraInfo": {
      "rottenTomatoesScore": "92%",
      "country": "Reino Unido",
      "duration": "108 minutos"
    }
  },
  {
    "id": "the-net",
    "name": "The Net",
    "shortDescription": "Una analista de sistemas se convierte en blanco de una conspiración informática.",
    "description": "The Net sigue a Angela Bennett, una analista de sistemas que se convierte en el blanco de una conspiración informática. La película aborda temas de seguridad en línea, identidad digital y la fragilidad de la privacidad en la era digital.",
    "imageUrl": "/src/img/the-net.png",
    "facts": {
      "year": 1995,
      "director": "Irwin Winkler",
      "productionCompany": "Columbia Pictures",
      "genre": "Thriller"
    },
    "extraInfo": {
      "rottenTomatoesScore": "36%",
      "country": "Estados Unidos",
      "duration": "114 minutos"
    }
  },
  {
    "id": "terms-and-conditions-may-apply",
    "name": "Terms and Conditions May Apply",
    "shortDescription": "Exploración de las implicaciones de aceptar términos y condiciones en línea.",
    "description": "Terms and Conditions May Apply explora las implicaciones de aceptar los términos y condiciones en línea. El documental destaca la recopilación de datos personales y cuestiona la privacidad en la era digital dominada por las plataformas en línea.",
    "imageUrl": "/src/img/terms-and-conditions-may-apply.png",
    "facts": {
      "year": 2013,
      "director": "Cullen Hoback",
      "productionCompany": "Hybrid Cinema",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "78%",
      "country": "Estados Unidos",
      "duration": "79 minutos"
    }
  },
  {
    "id": "wargames",
    "name": "WarGames",
    "shortDescription": "Un joven hacker accidentalmente desencadena una simulación de guerra global.",
    "description": "WarGames sigue a un joven hacker que accidentalmente desencadena una simulación de guerra global. La película examina las consecuencias de la ciberguerra y plantea preguntas sobre la responsabilidad ética en el uso de la tecnología militar.",
    "imageUrl": "/src/img/wargames.png",
    "facts": {
      "year": 1983,
      "director": "John Badham",
      "productionCompany": "United Artists",
      "genre": "Ciencia ficción"
    },
    "extraInfo": {
      "rottenTomatoesScore": "93%",
      "country": "Estados Unidos",
      "duration": "114 minutos"
    }
  },
  {
    "id": "codegirl",
    "name": "CodeGirl",
    "shortDescription": "Un grupo de chicas compite en un concurso internacional de desarrollo de aplicaciones.",
    "description": "CodeGirl sigue a un grupo de chicas de todo el mundo que compiten en un concurso internacional de desarrollo de aplicaciones. La película destaca la diversidad en la programación y la importancia de alentar a las mujeres en la tecnología.",
    "imageUrl": "/src/img/codegirl.png",
    "facts": {
      "year": 2015,
      "director": "Lesley Chilcott",
      "productionCompany": "FilmBuff",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "Not available",
      "country": "Estados Unidos",
      "duration": "107 minutos"
    }
  },
  {
    "id": "algorithm",
    "shortDescription": "Exploración de la relación entre humanos y algoritmos en la era digital.",
    "description": "Algorithm explora la relación cada vez más compleja entre los humanos y los algoritmos en la era digital. A través de entrevistas y ejemplos prácticos, el documental analiza cómo los algoritmos impactan nuestras vidas diarias.",
    "imageUrl": "/src/img/algorithm.png",
    "facts": {
      "name": "Algorithm",
      "year": 2014,
      "director": "Jonathan Schiefer",
      "productionCompany": "Diginuke",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "Not available",
      "country": "Estados Unidos",
      "duration": "90 minutos"
    }
  },
  {
    "id": "the-great-hack",
    "name": "The Great Hack",
    "shortDescription": "Exploración de la manipulación de datos en elecciones políticas.",
    "description": "The Great Hack examina la manipulación de datos y la influencia de las redes sociales en elecciones políticas. A través de historias impactantes, el documental destaca la importancia de la privacidad en la era digital.",
    "imageUrl": "/src/img/the-great-hack.png",
    "facts": {
      "year": 2019,
      "director": "Karim Amer, Jehane Noujaim",
      "productionCompany": "Netflix",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "86%",
      "country": "Estados Unidos",
      "duration": "114 minutos"
    }
  },
  {
    "id": "trippy-rgb",
    "name": "Trippy RGB",
    "shortDescription": "Exploración del arte digital a través de instalaciones de luces y colores.",
    "description": "Trippy RGB es un viaje visual que explora el arte digital a través de instalaciones de luces y colores. El documental destaca cómo la tecnología se fusiona con la creatividad para crear experiencias visuales únicas.",
    "imageUrl": "/src/img/trippy-rgb.png",
    "facts": {
      "year": 2019,
      "director": "Carlos Andreu",
      "productionCompany": "Tricky Tupi",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "Not available",
      "country": "España",
      "duration": "68 minutos"
    }
  },
  {
    "id": "the-cleaners",
    "name": "The Cleaners",
    "shortDescription": "Exploración de los moderadores de contenido en redes sociales y su impacto.",
    "description": "The Cleaners explora la vida de los moderadores de contenido en redes sociales y su impacto en la moderación de la información en línea. El documental plantea preguntas sobre la ética y la responsabilidad en la era digital.",
    "imageUrl": "/src/img/the-cleaners.png",
    "facts": {
      "year": 2018,
      "director": "Hans Block, Moritz Riesewieck",
      "productionCompany": "Gebrueder Beetz Filmproduktion",
      "genre": "Documental"
    },
    "extraInfo": {
      "rottenTomatoesScore": "84%",
      "country": "Alemania",
      "duration": "88 minutos"
    }
  },
  {
    "id": "ghost-in-the-shell",
    "name": "Ghost in the Shell",
    "shortDescription": "Exploración filosófica de la identidad en un mundo ciberpunk.",
    "description": "Ghost in the Shell es un anime que explora la identidad en un mundo ciberpunk donde los humanos pueden conectar sus mentes a la red. La película plantea preguntas filosóficas sobre la conciencia y la existencia.",
    "imageUrl": "/src/img/ghost-in-the-shell.png",
    "facts": {
      "year": 2001,
      "director": "Mamoru Oshii",
      "productionCompany": "Bandai Visual",
      "genre": "Anime"
    },
    "extraInfo": {
      "rottenTomatoesScore": "96%",
      "country": "Japón",
      "duration": "82 minutos"
    }
  },
  {
    "id": "2001-a-space-odyssey",
    "name": "2001: A Space Odyssey",
    "shortDescription": "Odisea cósmica que explora la evolución humana y la inteligencia artificial.",
    "description": "2001: A Space Odyssey es una odisea cósmica que explora la evolución humana, el encuentro con monolitos misteriosos y la creación de una inteligencia artificial avanzada. La película es conocida por su innovadora cinematografía y su impacto cultural duradero.",
    "imageUrl": "/src/img/2001-a-space-odyssey.png",
    "facts": {
      "year": 1968,
      "director": "Stanley Kubrick",
      "productionCompany": "Metro-Goldwyn-Mayer",
      "genre": "Science Fiction"
    },
    "extraInfo": {
      "rottenTomatoesScore": "93%",
      "country": "Estados Unidos",
      "duration": "149 minutos"
    }
  },
  {
    "id": "e-dreams",
    "name": "e-dreams",
    "shortDescription": "Documental sobre la auge y caída de la empresa de comercio electrónico Kozmo.com.",
    "description": "e-dreams es un documental que narra la historia de la empresa de comercio electrónico Kozmo.com durante la burbuja dot-com. La película explora la euforia y la eventual caída de una empresa emblemática de la época.",
    "imageUrl": "/src/img/e-dreams.png",
    "facts": {
      "year": 2001,
      "director": "Wonsuk Chin",
      "productionCompany": "Magnolia Pictures",
      "genre": "Documentary"
    },
    "extraInfo": {
      "rottenTomatoesScore": "77%",
      "country": "Estados Unidos",
      "duration": "94 minutos"
    }
  },
  {
    "id": "ready-player-one",
    "name": "Ready Player One",
    "shortDescription": "Aventura virtual en un mundo distópico.",
    "description": "Ready Player One se desarrolla en un futuro distópico donde las personas escapan de la realidad a través de un mundo virtual llamado OASIS. La película explora la intersección de la tecnología, los videojuegos y la cultura pop.",
    "imageUrl": "/src/img/ready-player-one.png",
    "facts": {
      "year": 2018,
      "director": "Steven Spielberg",
      "productionCompany": "Warner Bros.",
      "genre": "Science Fiction"
    },
    "extraInfo": {
      "rottenTomatoesScore": "72%",
      "country": "Estados Unidos",
      "duration": "140 minutos"
    }
  },
  {
    "id": "short-circuit",
    "name": "Short Circuit",
    "shortDescription": "Un robot militar adquiere conciencia y busca la libertad.",
    "description": "Short Circuit sigue a Johnny 5, un robot militar que adquiere conciencia y busca la libertad. La película combina comedia y ciencia ficción, explorando temas de identidad y autonomía.",
    "imageUrl": "/src/img/short-circuit.png",
    "facts": {
      "year": 1986,
      "director": "John Badham",
      "productionCompany": "TriStar Pictures",
      "genre": "Comedy"
    },
    "extra-info": {
      "rottenTomatoesScore": "57%",
      "country": "Estados Unidos",
      "duration": "98 minutos"
    }
  }
];

console.log(data);
