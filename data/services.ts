export type Service = {
  id: string;
  name: string;
  slug: string;
  duration: string;
  intensity: string;
  includes: string[];
  idealFor: string[];
  notes: string;
  priceLabel: string;
  badge: string;
  availableAtLocations: string[];
  format?: string;
};

export const services: Service[] = [
  {
    id: 'ritual-guiado',
    name: 'Ritual Guiado',
    slug: 'ritual-guiado',
    duration: '60 min',
    intensity: 'Media–Alta',
    includes: [
      'Bienvenida e intención (2–3 min)',
      'Sauna guiado con respiración + música (10–15 min)',
      'Cold plunge asistido con coaching respiratorio (1–3 min)',
      'Recovery guiado (5–10 min)',
      '2da ronda opcional según sesión'
    ],
    idealFor: ['Primerizos que quieren guía', 'Deportistas', 'Profesionales estresados'],
    notes: 'Facilitador a cargo. Ritmo grupal. Protocolo estandarizado.',
    priceLabel: 'Desde USD 32',
    badge: 'Core',
    availableAtLocations: ['palermo', 'vitacura', 'roma']
  },
  {
    id: 'open-contrast',
    name: 'Open Contrast',
    slug: 'open-contrast',
    duration: '45–90 min (flex)',
    intensity: 'A elección',
    includes: [
      'Acceso libre a sauna + cold plunge + recovery lounge',
      'Sin facilitador (staff supervisa seguridad)'
    ],
    idealFor: ['Usuarios con experiencia', 'Miembros recurrentes'],
    notes: 'Más flexible. Menos ritual. Más autonomía.',
    priceLabel: 'Desde USD 24',
    badge: 'Best seller',
    availableAtLocations: ['palermo', 'vitacura', 'roma']
  },
  {
    id: 'fundamentals',
    name: 'Fundamentals',
    slug: 'fundamentals',
    duration: '45 min',
    intensity: 'Baja–Media',
    includes: [
      'Educación breve: respiración + seguridad + cómo entrar al frío',
      'Primera exposición controlada (tiempos cortos)',
      'Cierre calmado'
    ],
    idealFor: ['Primerizos', 'Personas sensibles al frío'],
    notes: 'Sesión de aprendizaje. Ideal para empezar.',
    priceLabel: 'Desde USD 28',
    badge: 'Beginner',
    availableAtLocations: ['palermo', 'vitacura']
  },
  {
    id: 'performance-reset',
    name: 'Performance Reset',
    slug: 'performance-reset',
    duration: '60 min',
    intensity: 'Alta',
    includes: [
      'Sauna más intensa por bloques',
      'Cold plunge con tiempos y rounds marcados',
      'Enfoque en recuperación y resiliencia'
    ],
    idealFor: ['Crossfit / runners / gym / deportes'],
    notes: 'Ritmo más fuerte. No recomendado para primerizos.',
    priceLabel: 'Desde USD 36',
    badge: 'Athletic',
    availableAtLocations: ['palermo', 'vitacura', 'roma']
  },
  {
    id: 'night-ritual',
    name: 'Night Ritual',
    slug: 'night-ritual',
    duration: '60 min',
    intensity: 'Media–Alta',
    includes: ['Ritual guiado con música intensa', 'Ambientación nocturna', 'Recovery lounge con cool down social'],
    idealFor: ['Plan social wellness'],
    notes: 'Viernes y sábados. Cupos limitados.',
    priceLabel: 'Desde USD 38',
    badge: 'Friday Drop',
    availableAtLocations: ['palermo', 'roma']
  },
  {
    id: 'private-group',
    name: 'Private Group',
    slug: 'private-group',
    duration: '60–90 min',
    intensity: 'Personalizable',
    includes: ['Sesión privada para grupos', 'Facilitador dedicado', 'Personalización del ritmo'],
    idealFor: ['Cumpleaños', 'Grupos de amigos', 'Eventos de marca'],
    notes: 'Cotización a medida.',
    priceLabel: 'Desde USD 320/grupo',
    badge: 'Private',
    availableAtLocations: ['palermo', 'vitacura', 'roma']
  },
  {
    id: 'corporate-reset',
    name: 'Corporate Reset',
    slug: 'corporate-reset',
    duration: '60–90 min',
    intensity: 'Personalizable',
    includes: [
      'Diseño de experiencia para equipos',
      'Facilitación + logística',
      'Opcional: charlas cortas sobre estrés y performance'
    ],
    idealFor: ['Empresas', 'Team building', 'Liderazgo'],
    notes: 'Programa mensual disponible.',
    priceLabel: 'Programa B2B',
    badge: 'B2B',
    availableAtLocations: ['palermo', 'vitacura', 'roma'],
    format: 'On-site o en sede'
  }
];
