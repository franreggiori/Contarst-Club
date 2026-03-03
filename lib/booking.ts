export type BookingRecord = {
  bookingId: string;
  locationId: string;
  serviceId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  firstTime: boolean;
  createdAt: string;
};

const STORAGE_KEY = 'contrast_bookings';

export const createBookingId = () => `CC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

export const getBookings = (): BookingRecord[] => {
  if (typeof window === 'undefined') return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as BookingRecord[];
  } catch {
    return [];
  }
};

export const saveBooking = (booking: BookingRecord) => {
  const existing = getBookings();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([booking, ...existing]));
};

export const removeBooking = (bookingId: string) => {
  const existing = getBookings().filter((b) => b.bookingId !== bookingId);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
};

export const generateICS = (booking: BookingRecord, title: string, description: string) => {
  const [year, month, day] = booking.date.split('-').map(Number);
  const [hour, minute] = booking.time.split(':').map(Number);
  const start = new Date(Date.UTC(year, month - 1, day, hour, minute));
  const end = new Date(start.getTime() + 60 * 60000);
  const formatDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const content = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `UID:${booking.bookingId}@contrastclub.com`,
    `DTSTAMP:${formatDate(new Date())}`,
    `DTSTART:${formatDate(start)}`,
    `DTEND:${formatDate(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');

  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${booking.bookingId}.ics`;
  link.click();
  URL.revokeObjectURL(url);
};
