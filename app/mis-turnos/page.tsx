'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBookings, removeBooking, type BookingRecord } from '@/lib/booking';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

export default function MisTurnosPage() {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);

  useEffect(() => {
    setBookings(getBookings());
  }, []);

  const cancel = (id: string) => {
    removeBooking(id);
    setBookings(getBookings());
  };

  return (
    <div className="container space-y-5">
      <h1 className="text-4xl font-semibold">Mis turnos</h1>
      {bookings.length === 0 && <p className="text-white/70">No hay reservas guardadas todavía.</p>}
      {bookings.map((booking) => {
        const location = locations.find((l) => l.id === booking.locationId);
        const service = services.find((s) => s.id === booking.serviceId);
        return (
          <article key={booking.bookingId} className="card flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold">{service?.name}</h2>
              <p className="text-white/65">{location?.name} · {booking.date} · {booking.time}</p>
              <p className="text-sm text-cold">{booking.bookingId}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => cancel(booking.bookingId)} className="button-secondary">Cancelar</button>
              <Link href={`/reservar?bookingId=${booking.bookingId}`} className="button-primary">Reprogramar</Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
