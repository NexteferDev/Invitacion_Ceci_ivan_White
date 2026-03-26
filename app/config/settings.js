// Configuración de la Boda
// Edita este archivo para personalizar todos los detalles

const settings = {
  // Configuración del tema
  theme: {
    colors: {
      primary: '#d4af37',
      secondary: '#ff6b6b',
      accent: '#4a90e2',
      dark: '#1a1a1a',
      darker: '#0a0a0a',
      light: '#f5f5f5',
      white: '#ffffff',
      overlay: 'rgba(26, 26, 26, 0.95)',
      text: {
        primary: '#ffffff',
        secondary: '#d4af37',
        dark: '#1a1a1a'
      }
    },
    animations: {
      duration: {
        fast: 0.3,
        medium: 0.5,
        slow: 1.0,
        verySlow: 1.5
      },
      easing: 'easeInOut'
    },
    spacing: {
      section: 'py-20',
      container: 'px-4 md:px-8'
    }
  },

  // Información de la pareja
  couple: {
    bride: {
      name: "Cecy",
      fullName: "Cecy Salinas",
      email: "cecy@email.com",
      phone: " 712 173 5707",
      instagram: "@cecy",
      parents: "Felipe Salinas González & Ma. Guadalupe González Crescencio"
    },
    groom: {
      name: "Iván ",
      fullName: "Iván Solís",
      email: "ivan@email.com",
      phone: "7221111111",
      instagram: "@ivan",
      parents: "Tomás Solís Cruz & María Luisa Cruz Gabriel"
    },
    hashtag: "#IvanYCecy2026",
    email: "boda@ivanycecy.com"
  },

  // Fecha y hora
  wedding: {
    date: "2026-05-02",
    displayDate: "02 de Mayo 2026",
    shortDate: "02.05.26",
    day: "Sábado",
    ceremony: {
      time: "15:00",
      displayTime: "1:00 PM",
      duration: "1 hora"
    },
    cocktailHour: {
      time: "14:30",
      displayTime: "2:30 PM"
    },
    reception: {
      time: "15:30",
      displayTime: "3:00 PM",
      endTime: "22:00",
      displayEndTime: "10:00 PM"
    }
  },

  // Lugar del evento
  venue: {
    name: "Parroquia de Santo Domingo de Guzmán",
    ceremonyLocation: "Parroquia de Santo Domingo de Guzmán",
    receptionLocation: "Salón Marty",
    cocktailLocation: "Área de recepción",
    address: {
      full: "",
      street: "Avenida  Santo Domingo de Guzmán",
      district: "Santo Domingo de Guzmán",
      city: "Ixtlahuaca",
      postalCode: "50773",
      country: "México"
    },
    coordinates: {
      lat: 19.292,
      lng: -99.655
    },
    googleMapsUrl: "https://maps.app.goo.gl/XDj8kVvprrqwpe556",
    shareUrl: "https://maps.app.goo.gl/XDj8kVvprrqwpe556",
    parking: "",
    accommodation: [
      {
        name: "Hotel Ejemplo",
        distance: "5 minutos",
        bookingCode: "BODA2026"
      }
    ]
  },

  // Detalles del evento
  events: {
    ceremony: {
      title: "Ceremonia Religiosa",
      description: "Acompáñanos a celebrar nuestra unión en la parroquia",
      dressCode: "Cómo tú te sientas agusto..",
      colors: ["Prioriza comodidad para disfrutar cada momento."],
      notes: "Cómo tú te sientas a gusto"
    },
    reception: {
      title: "Recepción",
      description: "Celebremos juntos este momento tan especial",
      dressCode: "Libre",
      features: ["Música", "Comida", "Baile"],
      menu: "Comida mexicana"
    }
  },

  receptionVenue: {
  name: "Salón Marty",
  image: "/Salon/SalonMarti.jpg",
  address: {
    street: "Avenida Benito Juárez",
    city: "Santo Domingo de Guzmán",
    country: "Ixtlahuaca",
    postalCode: "50773",
    country: "Ixtlahuaca, México"
  },
    googleMapsUrl2: "https://maps.app.goo.gl/JW5ft3fgRsUU1Rgc8",
    shareUrl: "https://maps.app.goo.gl/JW5ft3fgRsUU1Rgc8",
    parking: "",
},

  // Historia de amor
  loveStory: [
    {
      date: "2022",
      title: "Nuestro inicio",
      description: "Nos conocimos en el momento menos esperado.",
      icon: "Heart"
    },
    {
      date: "2023",
      title: "Nuestro camino",
      description: "Crecimos juntos y aprendimos lo que es el amor verdadero.",
      icon: "MapPin"
    },
    {
      date: "2025",
      title: "El compromiso",
      description: "Decidimos compartir nuestras vidas para siempre.",
      icon: "Sparkles"
    },
    {
      date: "2026",
      title: "Nos casamos",
      description: "El inicio de nuestra nueva vida juntos.",
      icon: "Calendar"
    }
  ],

  // Galería
  gallery: [
    { url: "/our-moments/1.jpeg", alt: "Nosotros", caption: "Nuestro amor" },
    { url: "/our-moments/2.jpeg", alt: "Momentos", caption: "Recuerdos" },
    { url: "/our-moments/3.jpeg", alt: "Anillos", caption: "Compromiso" },
    { url: "/our-moments/4.jpeg", alt: "Detalles", caption: "Detalles" },
    { url: "/our-moments/5.jpeg", alt: "Juntos", caption: "Nuestro camino" },
    { url: "/our-moments/6.jpeg", alt: "Celebración", caption: "Celebración" }
  ],

  // Galería del lugar
  venueGallery: {
    heroImage: "/Iglesia/Iglesia.jpg",
    images: [
      { url: "/Iglesia/Iglesia.jpg", alt: "Lugar", caption: "Iglesia" },
      { url: "/Salon/SalonMarti.jpg", alt: "Salón", caption: "Salon" },
    ]
  },

   venueigle: {
    heroImage: "/Iglesia/Iglesia.jpg",
    images: [
      { url: "/Iglesia/Iglesia.jpg", alt: "Lugar", caption: "Iglesia" }
    ]
  },

  // Redes sociales
  social: {
    instagram: {
      bride: "@cecy",
      groom: "@ivan",
      wedding: "@boda2026",
      hashtag: "#IvanYCecy2026"
    },
    facebook: {
      eventPage: "https://facebook.com"
    }
  },

  // RSVP
  rsvp: {
    deadline: "2026-04-20",
    displayDeadline: "20 de Abril 2026",
    maxGuests: 5,
    allowPlusOne: true,
    collectDietaryInfo: false,
    collectSongRequests: false,
    emailNotification: "rsvp@boda.com"
  },

  // Regalos
  registry: {
    enabled: true,
    message: "Su presencia es nuestro mejor regalo.",
    links: [
      { name: "Mesa de regalos", url: "https://amazon.com", icon: "Gift" }
    ]
  },

  // Contacto
  contact: {
    weddingPlanner: {
      name: "Planner Eventos",
      phone: "7222222222",
      email: "planner@email.com"
    },
    photographer: {
      name: "Foto Studio",
      instagram: "@foto"
    }
  },

  // Reglas
  guidelines: {
    enabled: false,
    message: "Evento seguro",
    requirements: []
  },

  // Metadata
  metadata: {
    title: "Iván & Cecy | 02 de Mayo 2026",
    description: "Te invitamos a nuestra boda.",
    keywords: "boda, ivan, cecy",
    ogImage: "/og-image.jpg"
  }
};

export default settings;