export type LinkItem = {
  label: string;
  href?: string;
  external?: boolean;
};

export type Media = {
  src: string;
  alt: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  placeholder?: boolean;
};

export type Project = {
  title: string;
  description: string;
  year?: string;
  status?: string;
  technologies: string[];
  repository?: string;
  demo?: string;
  image?: Media;
  featured?: boolean;
  openSource?: boolean;
  placeholder?: boolean;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type Portfolio = {
  identity: {
    name: string;
    monogram: string;
    role: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    lede: string;
    primaryAction: string;
    secondaryAction: string;
    image?: Media;
    signals: Array<{ label: string; value: string; accent?: boolean }>;
  };
  profile: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    statement: string;
    principles: Array<{ number: string; title: string; text: string }>;
  };
  experience: Experience[];
  projects: Project[];
  stack: StackGroup[];
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    email?: string;
    links: LinkItem[];
  };
  links: LinkItem[];
};

export const portfolio: Portfolio = {
  identity: {
    name: 'Gustavo Ismael Ponce',
    monogram: 'GIP',
    role: 'Software developer',
  },
  seo: {
    title: 'Gustavo Ismael Ponce | Software developer',
    description:
      'Portfolio personal de Gustavo Ismael Ponce: experiencia, proyectos abiertos y tecnologias para construir software.',
  },
  hero: {
    eyebrow: 'SOFTWARE DEVELOPER / SYSTEMS IN PROGRESS',
    headline: 'Construyo software que vuelve visible lo complejo.',
    lede:
      'Un espacio personal para documentar experiencia, proyectos abiertos y las herramientas con las que convierto ideas en sistemas.',
    primaryAction: 'Explorar proyectos',
    secondaryAction: 'Conectar',
    image: {
      src: '/images/profile/gustavo-ismael-ponce-profile.webp',
      alt: 'Gustavo Ismael Ponce',
    },
    signals: [
      { label: 'BASE', value: 'Agregar ubicación' },
      { label: 'STATUS', value: 'Agregar disponibilidad', accent: true },
      { label: 'FOCUS', value: 'PHP · Python · JavaScript' },
    ],
  },
  profile: {
    eyebrow: '01 / PROFILE',
    title: 'Un perfil en construcción constante.',
    paragraphs: [
      'Trabajo entre backend, frontend y las decisiones que conectan ambos mundos. Este bloque está listo para convertirse en una presentación personal más precisa.',
      'La intención de esta página es mostrar no solo qué construyo, sino también cómo pienso, qué aprendo y qué problemas me interesa resolver.',
    ],
    statement: 'El código es el medio. La claridad del sistema es el resultado.',
    principles: [
      {
        number: '01',
        title: 'Diseñar con intención',
        text: 'Interfaces y sistemas que explican su propósito sin ruido.',
      },
      {
        number: '02',
        title: 'Construir para durar',
        text: 'Decisiones técnicas que puedan evolucionar con el producto.',
      },
      {
        number: '03',
        title: 'Compartir el proceso',
        text: 'Proyectos abiertos, aprendizajes visibles y documentación útil.',
      },
    ],
  },
  experience: [
    {
      period: '[AAAA - ACTUALIDAD]',
      role: '[Agregar cargo]',
      company: '[Agregar empresa o proyecto]',
      location: '[Agregar ubicación o modalidad]',
      description:
        'Reemplaza este texto con una síntesis de la experiencia, el contexto del producto y el tipo de problemas abordados.',
      highlights: [
        'Agregar responsabilidad o logro relevante.',
        'Agregar una segunda contribución concreta.',
      ],
      technologies: ['Añadir tecnología', 'Añadir framework'],
      placeholder: true,
    },
  ],
  projects: [
    {
      title: 'Proyecto destacado',
      description:
        'Reemplaza este bloque con una explicación breve del problema, la solución y por qué el proyecto merece ser explorado.',
      year: '20XX',
      status: 'Agregar estado',
      technologies: ['Añadir tecnología', 'Añadir tecnología'],
      openSource: true,
      featured: true,
      placeholder: true,
    },
    {
      title: 'Proyecto 02',
      description: 'Descripción breve del proyecto y su aporte.',
      year: '20XX',
      status: 'En exploración',
      technologies: ['Añadir stack'],
      placeholder: true,
    },
    {
      title: 'Proyecto 03',
      description: 'Descripción breve del proyecto y su aporte.',
      year: '20XX',
      status: 'Publicado',
      technologies: ['Añadir stack'],
      placeholder: true,
    },
  ],
  stack: [
    {
      label: 'Lenguajes',
      items: ['PHP', 'Python', 'JavaScript', 'HTML5', 'CSS'],
    },
    {
      label: 'Frontend',
      items: ['HTML5', 'CSS', 'JavaScript', 'Tailwind'],
    },
    {
      label: 'Backend',
      items: ['Laravel', 'FastAPI'],
    },
    {
      label: 'Por ampliar',
      items: ['Bases de datos', 'Testing', 'Infraestructura', 'Herramientas'],
    },
  ],
  contact: {
    eyebrow: '05 / CONTACT',
    title: 'Abramos un canal.',
    text: 'Agrega aquí una invitación breve para conversar sobre proyectos, colaboraciones o nuevas oportunidades.',
    links: [
      { label: 'GitHub', external: true },
      { label: 'LinkedIn', external: true },
      { label: 'CV', external: false },
    ],
  },
  links: [
    { label: 'GitHub', external: true },
    { label: 'LinkedIn', external: true },
  ],
};
