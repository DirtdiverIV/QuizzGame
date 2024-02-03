// data/quizData.js
const quizData = [
  {
    question: '¿Cuál es la capital de Galicia?',
    image: '/img/1.jpg',
    answers: [
      { text: 'Vigo', isCorrect: false },
      { text: 'A Coruña', isCorrect: false },
      { text: 'Santiago de Compostela', isCorrect: true },
      { text: 'Lugo', isCorrect: false },
    ],
  },
  {
    question: '¿Qué idioma se habla en Galicia además del español?',
    image: '/img/2.jpg',
    answers: [
      { text: 'Catalán', isCorrect: false },
      { text: 'Euskera', isCorrect: false },
      { text: 'Gallego', isCorrect: true },
      { text: 'Inglés', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el plato más famoso de Galicia?',
    image: '/img/3.jpg',
    answers: [
      { text: 'Paella', isCorrect: false },
      { text: 'Tortilla Española', isCorrect: false },
      { text: 'Pulpo a la Gallega', isCorrect: true },
      { text: 'Gazpacho', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es la festividad más importante de Galicia?',
    image: '/img/4.jpg',
    answers: [
      { text: 'San Fermín', isCorrect: false },
      { text: 'La Tomatina', isCorrect: false },
      { text: 'El Apóstol Santiago', isCorrect: true },
      { text: 'Las Fallas', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el río más largo de Galicia?',
    image: '/img/5.jpg',
    answers: [
      { text: 'Río Sil', isCorrect: false },
      { text: 'Río Miño', isCorrect: true },
      { text: 'Río Tambre', isCorrect: false },
      { text: 'Río Ulla', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es la catedral más famosa de Galicia?',
    image: '/img/6.jpg',
    answers: [
      { text: 'Catedral de León', isCorrect: false },
      { text: 'Catedral de Burgos', isCorrect: false },
      { text: 'Catedral de Santiago de Compostela', isCorrect: true },
      { text: 'Catedral de Salamanca', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es la ciudad más poblada de Galicia?',
    image: '/img/7.jpg',
    answers: [
      { text: 'Santiago de Compostela', isCorrect: false },
      { text: 'Vigo', isCorrect: true },
      { text: 'A Coruña', isCorrect: false },
      { text: 'Lugo', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el vino más famoso de Galicia?',
    image: '/img/8.jpg',
    answers: [
      { text: 'Rioja', isCorrect: false },
      { text: 'Ribera del Duero', isCorrect: false },
      { text: 'Albariño', isCorrect: true },
      { text: 'Cava', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el parque natural más grande de Galicia?',
    image: '/img/9.jpg',
    answers: [
      { text: 'Parque Natural de las Islas Atlánticas', isCorrect: false },
      { text: 'Parque Natural de las Dunas de Corrubedo', isCorrect: false },
      { text: 'Parque Natural de Baixa Limia', isCorrect: true },
      { text: 'Parque Natural de la Sierra de la Enciña de la Lastra', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el puerto más importante de Galicia?',
    image: '/img/10.jpg',
    answers: [
      { text: 'Puerto de A Coruña', isCorrect: false },
      { text: 'Puerto de Vigo', isCorrect: true },
      { text: 'Puerto de Ferrol', isCorrect: false },
      { text: 'Puerto de Marín', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el instrumento musical tradicional de Galicia?',
    image: '/img/11.jpg',
    answers: [
      { text: 'Guitarra', isCorrect: false },
      { text: 'Gaita', isCorrect: true },
      { text: 'Tambor', isCorrect: false },
      { text: 'Flauta', isCorrect: false },
    ],
  },
  {
    question: '¿Qué mar baña la costa de Galicia?',
    image: '/img/12.jpg',
    answers: [
      { text: 'Mar Mediterráneo', isCorrect: false },
      { text: 'Mar Cantábrico', isCorrect: false },
      { text: 'Océano Atlántico', isCorrect: true },
      { text: 'Mar Báltico', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el faro más antiguo del mundo que aún está en funcionamiento y se encuentra en Galicia?',
    image: '/img/13.jpg',
    answers: [
      { text: 'Faro de Fisterra', isCorrect: false },
      { text: 'Faro de Estaca de Bares', isCorrect: false },
      { text: 'Torre de Hércules', isCorrect: true },
      { text: 'Faro de Cabo Silleiro', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del camino de peregrinación que termina en Santiago de Compostela?',
    image: '/img/14.jpg',
    answers: [
      { text: 'Camino de Santiago', isCorrect: true },
      { text: 'Camino de la Plata', isCorrect: false },
      { text: 'Camino Francés', isCorrect: false },
      { text: 'Camino del Norte', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre de la danza tradicional de Galicia?',
    image: '/img/15.jpg',
    answers: [
      { text: 'Flamenco', isCorrect: false },
      { text: 'Sardana', isCorrect: false },
      { text: 'Muñeira', isCorrect: true },
      { text: 'Jota', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del archipiélago gallego que es Parque Nacional?',
    image: '/img/16.jpg',
    answers: [
      { text: 'Islas Cíes', isCorrect: false },
      { text: 'Islas Ons', isCorrect: false },
      { text: 'Islas Atlánticas de Galicia', isCorrect: true },
      { text: 'Islas Sisargas', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del licor tradicional de Galicia?',
    image: '/img/17.jpg',
    answers: [
      { text: 'Brandy', isCorrect: false },
      { text: 'Orujo', isCorrect: true },
      { text: 'Ron', isCorrect: false },
      { text: 'Whisky', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre de la torta de almendras típica de Santiago de Compostela?',
    image: '/img/18.jpg',
    answers: [
      { text: 'Tarta de San Marcos', isCorrect: false },
      { text: 'Tarta de la Abuela', isCorrect: false },
      { text: 'Tarta de Santiago', isCorrect: true },
      { text: 'Tarta de Queso', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del estrecho marítimo que separa Galicia de la vecina Portugal?',
    image: '/img/19.jpg',
    answers: [
      { text: 'Estrecho de Gibraltar', isCorrect: false },
      { text: 'Estrecho de Magallanes', isCorrect: false },
      { text: 'Ría de Vigo', isCorrect: false },
      { text: 'Río Miño', isCorrect: true },
    ],
  },
  {
    question: '¿Cuál es el nombre de la construccion situada en A Coruña que es Patrimonio de la Humanidad?',
    image: '/img/20.jpg',
    answers: [
      { text: 'Castillo de San Felipe', isCorrect: false },
      { text: 'Castillo de San Antón', isCorrect: false },
      { text: 'Torre de Hércules', isCorrect: true },
      { text: 'Castillo de Santa Cruz', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál se considera el final del camino tras llegar a Santiago?',
    image: '/img/21.jpg',
    answers: [
      { text: 'Finisterre', isCorrect: true },
      { text: 'Muxia', isCorrect: false },
      { text: 'Estaca de Bares', isCorrect: false },
      { text: 'Muros', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del famoso marisco gallego cuya concha llevan los peregrinos?',
    image: '/img/22.jpg',
    answers: [
      { text: 'Mejillón', isCorrect: false },
      { text: 'Vieira', isCorrect: true },
      { text: 'Almeja', isCorrect: false },
      { text: 'Ostra', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre de la famosa torre situada en A Coruña?',
    image: '/img/23.jpg',
    answers: [
      { text: 'Torre de Pisa', isCorrect: false },
      { text: 'Torre Eiffel', isCorrect: false },
      { text: 'Torre de Hércules', isCorrect: true },
      { text: 'Torre Agbar', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre de la famosa playa situada en las Islas Cíes?',
    image: '/img/24.jpg',
    answers: [
      { text: 'Playa de la Concha', isCorrect: false },
      { text: 'Playa de las Catedrales', isCorrect: false },
      { text: 'Playa de Rodas', isCorrect: true },
      { text: 'Playa de la Malvarrosa', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del famoso queso gallego con denominación de origen?',
    image: '/img/25.jpg',
    answers: [
      { text: 'Queso Manchego', isCorrect: false },
      { text: 'Queso Cabrales', isCorrect: false },
      { text: 'Queso Tetilla', isCorrect: true },
      { text: 'Queso Idiazábal', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del famoso pimiento picante gallego?',
    image: '/img/26.jpg',
    answers: [
      { text: 'Pimiento de Padrón', isCorrect: true },
      { text: 'Pimiento de Guernica', isCorrect: false },
      { text: 'Pimiento del Piquillo', isCorrect: false },
      { text: 'Pimiento Choricero', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del famoso pan gallego con denominación de origen?',
    image: '/img/27.jpg',
    answers: [
      { text: 'Pan de Cea', isCorrect: true },
      { text: 'Pan de Alfacar', isCorrect: false },
      { text: 'Pan de Cruz', isCorrect: false },
      { text: 'Pan de Payés', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del famosa carne gallega hecho con partes del cerdo?',
    image: '/img/28.jpg',
    answers: [
      { text: 'Chorizo', isCorrect: false },
      { text: 'Botillo', isCorrect: false },
      { text: 'Lacón', isCorrect: true },
      { text: 'Morcilla', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del famoso río gallego que desemboca en el Atlántico?',
    image: '/img/29.jpg',
    answers: [
      { text: 'Río Ebro', isCorrect: false },
      { text: 'Río Duero', isCorrect: false },
      { text: 'Río Miño', isCorrect: true },
      { text: 'Río Tajo', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del reino medieval que se estableció en Galicia?',
    image: '/img/30.jpg',
    answers: [
      { text: 'Reino de León', isCorrect: false },
      { text: 'Reino de Castilla', isCorrect: false },
      { text: 'Reino de Navarra', isCorrect: false },
      { text: 'Reino de Galicia', isCorrect: true },
    ],
  },
  {
    question: '¿Cuál es el nombre de la cultura pre-romana que habitó Galicia?',
    image: '/img/31.jpg',
    answers: [
      { text: 'Cultura Íbera', isCorrect: false },
      { text: 'Cultura Tartésica', isCorrect: false },
      { text: 'Cultura Celta', isCorrect: true },
      { text: 'Cultura Fenicia', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del emperador romano nacido en Gallaecia?',
    image: '/img/32.jpg',
    answers: [
      { text: 'Julio César', isCorrect: false },
      { text: 'Nerón', isCorrect: false },
      { text: 'Trajano', isCorrect: false },
      { text: 'Teodosio I', isCorrect: true },
    ],
  },
  {
    question: '¿Cuál es el nombre de la revuelta contra el dominio romano en Galicia?',
    image: '/img/33.jpg',
    answers: [
      { text: 'Guerra de las Galias', isCorrect: false },
      { text: 'Guerras Cántabras', isCorrect: false },
      { text: 'Guerras Púnicas', isCorrect: false },
      { text: 'Guerras de Viriato', isCorrect: true },
    ],
  },
  {
    question: '¿Cuál es el nombre del monasterio medieval más importante de Galicia?',
    image: '/img/34.jpg',
    answers: [
      { text: 'Monasterio de Leyre', isCorrect: false },
      { text: 'Monasterio de Silos', isCorrect: false },
      { text: 'Monasterio de Santo Domingo de Silos', isCorrect: false },
      { text: 'Monasterio de San Martín Pinario', isCorrect: true },
    ],
  },
  {
    question: '¿Cuál es el nombre del arzobispo que inició la construcción de la catedral de Santiago de Compostela?',
    image: '/img/35.jpg',
    answers: [
      { text: 'Arzobispo Rodrigo', isCorrect: false },
      { text: 'Arzobispo Diego Gelmírez', isCorrect: true },
      { text: 'Arzobispo Berenguel de Landoira', isCorrect: false },
      { text: 'Arzobispo Juan Arias', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre del primer rey de Galicia?',
    image: '/img/36.jpg',
    answers: [
      { text: 'Rey Alfonso I', isCorrect: false },
      { text: 'Rey Hermerico', isCorrect: true },
      { text: 'Rey Rechila', isCorrect: false },
      { text: 'Rey Miro', isCorrect: false },
    ],
  },
  {
    question: '¿Cuál es el nombre de la leyenda que explica el origen del Apóstol Santiago en Galicia?',
    image: '/img/37.jpg',
    answers: [
      { text: 'Leyenda de la Dama Blanca', isCorrect: false },
      { text: 'Leyenda de la Reina Lupa', isCorrect: false },
      { text: 'Leyenda del Santo Grial', isCorrect: false },
      { text: 'Leyenda del traslado del cuerpo del Apóstol Santiago', isCorrect: true },
    ],
  },
  {
    question: '¿Cuál es el nombre del castro gallego más famoso?',
    image: '/img/38.jpg',
    answers: [
      { text: 'Castro de Baroña', isCorrect: true },
      { text: 'Castro de Coaña', isCorrect: false },
      { text: 'Castro de Chao Samartín', isCorrect: false },
      { text: 'Castro de Santa Trega', isCorrect: false },
    ],
  },
  {
    "question": "¿Cuál es la empresa gallega más grande en términos de facturación?",
    "image": "/img/39.jpg",
    "answers": [
      { "text": "Mercadona", "isCorrect": false },
      { "text": "Inditex", "isCorrect": true },
      { "text": "El Corte Inglés", "isCorrect": false },
      { "text": "Telefónica", "isCorrect": false }
    ]
  },
  {
    "question": "¿Qué empresa gallega es famosa por su producción de vino albariño?",
    "image": "/img/40.jpg",
    "answers": [
      { "text": "Bodegas Ramón Bilbao", "isCorrect": false },
      { "text": "Bodegas Protos", "isCorrect": false },
      { "text": "Bodegas Martín Códax", "isCorrect": true },
      { "text": "Bodegas Muga", "isCorrect": false }
    ]
  },
  {
    "question": "¿Qué empresa gallega es conocida por su producción de conservas de pescado?",
    "image": "/img/41.jpg",
    "answers": [
      { "text": "Conservas Albo", "isCorrect": false },
      { "text": "Conservas Calvo", "isCorrect": true },
      { "text": "Conservas Dani", "isCorrect": false },
      { "text": "Conservas Ortiz", "isCorrect": false }
    ]
  },
  {
    "question": "¿Qué empresa gallega es conocida por su producción de lácteos?",
    "image": "/img/42.jpg",
    "answers": [
      { "text": "Leche Pascual", "isCorrect": false },
      { "text": "Leche Asturiana", "isCorrect": false },
      { "text": "Leche Río", "isCorrect": true },
      { "text": "Leche Kaiku", "isCorrect": false }
    ]
  },
  {
    "question": "¿Qué empresa gallega es conocida por su producción de agua mineral?",
    "image": "/img/43.jpg",
    "answers": [
      { "text": "Aguas de Lanjarón", "isCorrect": false },
      { "text": "Aguas de Bezoya", "isCorrect": false },
      { "text": "Aguas de Mondariz", "isCorrect": true },
      { "text": "Aguas de Solán de Cabras", "isCorrect": false }
    ]
  },
  {
    "question": "¿Qué empresa gallega es conocida por su producción de cerveza?",
    "image": "/img/44.jpg",
    "answers": [
      { "text": "Mahou", "isCorrect": false },
      { "text": "Estrella Galicia", "isCorrect": true },
      { "text": "San Miguel", "isCorrect": false },
      { "text": "Cruzcampo", "isCorrect": false }
    ]
  }
    // Agrega más preguntas según sea necesario
  ];
  
  export default quizData;