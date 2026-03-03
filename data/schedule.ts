import { locations } from './locations';

export type Slot = {
  id: string;
  date: string;
  time: string;
  serviceId: string;
  locationId: string;
  capacity: number;
  spotsLeft: number;
  instructorName?: string;
  tags: string[];
};

export type LocationSchedule = {
  locationId: string;
  days: string[];
  openHours: string;
  guidedTimes: string[];
  openContrastWindows: string[];
};

const upcomingDates = Array.from({ length: 14 }).map((_, idx) => {
  const date = new Date();
  date.setDate(date.getDate() + idx);
  return date.toISOString().slice(0, 10);
});

export const locationSchedules: LocationSchedule[] = locations.map((loc) => ({
  locationId: loc.id,
  days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  openHours: loc.hours,
  guidedTimes: ['07:00', '18:00', '19:00'],
  openContrastWindows: ['09:00-12:00', '14:00-17:00', '20:00-22:00']
}));

const instructors = ['Sofía Rojas', 'Martín Vega', 'Valentina Costa', 'Diego Falco'];

export const slots: Slot[] = upcomingDates.flatMap((date, i) =>
  locations.flatMap((loc, li) => {
    const guided = [
      { time: '07:00', serviceId: 'ritual-guiado', tags: ['Beginner friendly'] },
      { time: '18:00', serviceId: 'ritual-guiado', tags: ['Group energy'] },
      { time: '19:00', serviceId: 'night-ritual', tags: ['Friday vibe'] }
    ];

    const open = ['09:30', '10:30', '11:30', '14:30', '15:30', '16:30', '20:30'].map((time) => ({
      time,
      serviceId: 'open-contrast',
      tags: ['Self guided']
    }));

    const privateGroup = [{ time: '21:30', serviceId: 'private-group', tags: ['Private booking'] }];

    return [...guided, ...open, ...privateGroup].map((item, si) => ({
      id: `${loc.id}-${date}-${item.time}-${item.serviceId}`,
      date,
      time: item.time,
      serviceId: item.serviceId,
      locationId: loc.id,
      capacity: item.serviceId === 'open-contrast' ? 20 : item.serviceId === 'private-group' ? 8 : 14,
      spotsLeft: Math.max(1, (item.serviceId === 'open-contrast' ? 20 : item.serviceId === 'private-group' ? 8 : 14) - ((i + si + li) % 7)),
      instructorName: item.serviceId === 'open-contrast' ? undefined : instructors[(i + li + si) % instructors.length],
      tags: item.tags
    }));
  })
);
