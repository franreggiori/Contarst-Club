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
    hero: 'Hub urbano premium para rituales guiados y experiencias de contraste térmico.'
  }
];
