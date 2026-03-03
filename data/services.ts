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
    availableAtLocations: ['palermo']
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
    availableAtLocations: ['palermo']
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
    availableAtLocations: ['palermo']
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
    availableAtLocations: ['palermo']
  }
];
