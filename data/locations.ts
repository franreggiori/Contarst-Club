export type Location = {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  amenities: string[];
  hero: string;
};

export const locations: Location[] = [
  {
    id: 'palermo',
    slug: 'palermo',
    name: 'Contrast Club Palermo',
    city: 'Buenos Aires',
    address: 'Gorriti 5100, Palermo',
    hours: 'Lun a Dom 07:00–22:00',
    amenities: ['Sauna Finlandés', 'Cold plunge 6°C', 'Recovery lounge', 'Lockers premium'],
    hero: 'Hub urbano para miembros y rituales guiados.'
  },
  {
    id: 'vitacura',
    slug: 'vitacura',
    name: 'Contrast Club Vitacura',
    city: 'Santiago',
    address: 'Av. Vitacura 2900',
    hours: 'Lun a Dom 06:30–22:30',
    amenities: ['Sauna panorámico', 'Plunge dual 5°C / 10°C', 'Breathwork room'],
    hero: 'Formato flagship con operación multi-sede.'
  },
  {
    id: 'roma',
    slug: 'roma-norte',
    name: 'Contrast Club Roma Norte',
    city: 'CDMX',
    address: 'Orizaba 120, Roma Norte',
    hours: 'Lun a Dom 07:00–23:00',
    amenities: ['Sauna de bloques', 'Cold plunge asistido', 'Social cool down bar'],
    hero: 'Diseñado para alta demanda y eventos privados.'
  }
];
